import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';

// Get the current logged-in user
export async function GET() {
  try {
    // Get the user cookie
    const cookieStore = cookies();
    const userCookie = cookieStore.get('user');
    
    if (!userCookie) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    
    try {
      const userData = JSON.parse(userCookie.value);
      
      if (!userData.email) {
        return NextResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }
      
      // Fetch user data from database
      const user = await prisma.user.findUnique({
        where: { email: userData.email },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          image: true,
          bio: true,
          phone: true,
          birthDate: true,
          createdAt: true
        }
      });
      
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      
      return NextResponse.json({ user });
    } catch (error) {
      console.error('Error parsing user cookie:', error);
      return NextResponse.json({ error: 'Invalid session' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error fetching current user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 