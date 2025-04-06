import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { existsSync, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

// POST handler for updating user profile (alternative to PUT)
export async function POST(req) {
  console.log("POST /api/users/profile-update route handler called");
  try {
    const formData = await req.formData();
    console.log("FormData received:", Object.fromEntries(formData.entries()));
    const email = formData.get('email');
    
    if (!email) {
      console.log("Email required but not provided");
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    
    // Find user first to verify they exist
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (!existingUser) {
      console.log(`User with email ${email} not found`);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    console.log(`User found: ${existingUser.id}`);
    
    // Prepare update data
    const updateData = {};
    
    // Text fields
    if (formData.has('name')) updateData.name = formData.get('name');
    if (formData.has('bio')) updateData.bio = formData.get('bio');
    if (formData.has('phone')) updateData.phone = formData.get('phone');
    if (formData.has('birthDate')) updateData.birthDate = formData.get('birthDate');
    
    console.log("Update data prepared:", updateData);
    
    // Handle image upload if provided
    const imageFile = formData.get('image');
    if (imageFile && imageFile instanceof Blob) {
      console.log("Image file received, processing...");
      try {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const filename = `${uuidv4()}.${imageFile.type.split('/')[1]}`;
        
        // Ensure avatars directory exists
        const avatarsDir = join(process.cwd(), 'public/avatars');
        if (!existsSync(avatarsDir)) {
          console.log("Creating avatars directory");
          mkdirSync(avatarsDir, { recursive: true });
        }
        
        // Write file to disk
        const filePath = join(avatarsDir, filename);
        await writeFile(filePath, buffer);
        
        // Update image path in database
        updateData.image = `/avatars/${filename}`;
        console.log("Image saved to:", filePath);
      } catch (imageError) {
        console.error("Error processing image:", imageError);
      }
    }
    
    // Update user in database
    console.log("Updating user with data:", updateData);
    const updatedUser = await prisma.user.update({
      where: { email },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        image: true,
        bio: true,
        phone: true,
        birthDate: true
      }
    });
    
    console.log("User updated successfully");
    return NextResponse.json({ user: updatedUser });
  } catch (error) {
    console.error('Error updating user profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 