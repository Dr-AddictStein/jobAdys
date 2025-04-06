import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

// Simple hash function using crypto
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// API route to change user password
export async function POST(req) {
  try {
    const body = await req.json();
    const { email, currentPassword, newPassword } = body;
    
    if (!email || !currentPassword || !newPassword) {
      return NextResponse.json({ 
        error: 'Email, current password, and new password are required' 
      }, { status: 400 });
    }
    
    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        password: true
      }
    });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Verify current password
    const hashedCurrentPassword = hashPassword(currentPassword);
    
    if (hashedCurrentPassword !== user.password) {
      return NextResponse.json({ error: 'Current password is incorrect' }, { status: 401 });
    }
    
    // Hash the new password
    const hashedNewPassword = hashPassword(newPassword);
    
    // Update the password
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedNewPassword }
    });
    
    return NextResponse.json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 