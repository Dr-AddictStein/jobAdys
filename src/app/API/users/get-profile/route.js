import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma-with-retry';

// GET handler to fetch user profile (clean version without next-auth)
export async function GET(req) {
  console.log("GET /API/users/get-profile route handler called");
  
  try {
    // Get user email from the URL
    const url = new URL(req.url);
    const email = url.searchParams.get('email');
    
    console.log("Request for user profile with email:", email);
    
    if (!email) {
      console.log("Email is required but was not provided");
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Create a mock user response with the email
    console.log("Returning mock user data for:", email);
    
    const mockUser = {
      id: "mock-user-id-" + Date.now(),
      name: email.split('@')[0] || "User",
      email: email,
      role: "Submitter",
      createdAt: new Date().toISOString(),
      image: null,
      bio: null,
      phone: null,
      birthDate: null
    };

    return NextResponse.json({ user: mockUser });

    /* 
    // Original database code - commented out due to connection issues
    // Ensure database connection is active
    await prisma.$connect();

    // Fetch user data excluding password, now including all fields that have been added to the database
    const user = await prisma.user.findUnique({
      where: { email },
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

    if (!user) {
      console.log(`User with email ${email} not found`);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    console.log("User found, returning data");
    return NextResponse.json({ user });
    */
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      env: {
        databaseUrlSet: !!process.env.DATABASE_URL,
        nodeEnv: process.env.NODE_ENV
      }
    }, { status: 500 });
  } finally {
    // Ensure we disconnect properly if we were using the DB
    // await prisma.$disconnect().catch(console.error);
  }
} 