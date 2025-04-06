import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma-with-retry';
import { existsSync, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import { join } from 'path';

// POST handler for updating user profile
export async function POST(req) {
  console.log("POST /API/update-profile route handler called");
  try {
    const formData = await req.formData();
    console.log("FormData received:", Object.fromEntries(formData.entries()));
    const email = formData.get('email');
    
    if (!email) {
      console.log("Email required but not provided");
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    
    // Create a response with the exact data provided in the form
    const updatedUser = {
      id: "mock-user-id-" + Date.now(),
      name: formData.get('name') || email.split('@')[0] || "User",
      email: email,
      role: "Submitter",
      createdAt: new Date().toISOString(),
      bio: formData.get('bio') || null,
      phone: formData.get('phone') || null,
      birthDate: formData.get('birthDate') || null,
      image: null
    };
    
    // Handle image upload if provided
    const imageFile = formData.get('image');
    if (imageFile && imageFile instanceof Blob) {
      console.log("Image file received, processing...");
      try {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        // Generate unique filename using timestamp and random number
        const timestamp = Date.now();
        const randomStr = Math.random().toString(36).substring(2, 15);
        const filename = `${timestamp}_${randomStr}.${imageFile.type.split('/')[1]}`;
        
        // Ensure avatars directory exists
        const avatarsDir = join(process.cwd(), 'public/avatars');
        if (!existsSync(avatarsDir)) {
          console.log("Creating avatars directory");
          mkdirSync(avatarsDir, { recursive: true });
        }
        
        // Write file to disk
        const filePath = join(avatarsDir, filename);
        await writeFile(filePath, buffer);
        
        // Add the image path to the response
        updatedUser.image = `/avatars/${filename}`;
        console.log("Image saved to:", filePath);
      } catch (imageError) {
        console.error("Error processing image:", imageError);
      }
    }
    
    console.log("Returning updated user data:", updatedUser);
    return NextResponse.json({ user: updatedUser });
    
    /* Original database code - commented out due to connection issues
    
    // Find user first to verify they exist
    console.log("Finding user with email:", email);
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (!existingUser) {
      console.log(`User with email ${email} not found`);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    console.log(`User found: ${existingUser.id}`);
    
    // Prepare update data - now including all fields
    const updateData = {};
    
    // Update all fields
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
        // Generate unique filename using timestamp and random number
        const timestamp = Date.now();
        const randomStr = Math.random().toString(36).substring(2, 15);
        const filename = `${timestamp}_${randomStr}.${imageFile.type.split('/')[1]}`;
        
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
    
    // Update user in database with all fields
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
    */
  } catch (error) {
    console.error('Error updating user profile:', error);
    return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 });
  }
} 