import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma-with-retry';
import crypto from 'crypto';

// Simple hash function using crypto
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// POST handler for changing password 
export async function POST(req) {
  console.log("POST /API/change-password route handler called");
  
  try {
    const body = await req.json();
    console.log("Received password change request");
    
    const { email, currentPassword, newPassword } = body;
    
    if (!email || !currentPassword || !newPassword) {
      console.log("Missing required fields for password change");
      return NextResponse.json({ 
        error: 'Email, current password, and new password are required' 
      }, { status: 400 });
    }
    
    // Find the user
    console.log("Finding user with email:", email);
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        password: true
      }
    });
    
    if (!user) {
      console.log("User not found");
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Verify current password
    console.log("Verifying current password");
    const hashedCurrentPassword = hashPassword(currentPassword);
    
    if (hashedCurrentPassword !== user.password) {
      console.log("Current password is incorrect");
      return NextResponse.json({ error: 'Current password is incorrect' }, { status: 401 });
    }
    
    // Hash the new password
    console.log("Updating password for user");
    const hashedNewPassword = hashPassword(newPassword);
    
    // Update the password
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedNewPassword }
    });
    
    console.log("Password updated successfully");
    return NextResponse.json({ 
      success: true, 
      message: 'Password updated successfully' 
    });
  } catch (error) {
    console.error('Error updating password:', error);
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error.message 
    }, { status: 500 });
  }
}