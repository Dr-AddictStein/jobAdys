import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma-with-retry';

export async function GET() {
  try {
    console.log("Testing database connection...");
    
    // First try to connect explicitly
    await prisma.$connect();
    console.log("Prisma connect successful");
    
    // Then try a simple query that doesn't require an existing table
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log("Database query successful:", result);
    
    return NextResponse.json({ 
      success: true, 
      message: "Database connection successful", 
      result
    });
  } catch (error) {
    console.error("Database connection error:", error);
    
    // Return detailed error for debugging
    return NextResponse.json({ 
      error: "Database connection failed", 
      details: error.message,
      stack: error.stack,
      env: {
        database_url_set: !!process.env.DATABASE_URL,
        node_env: process.env.NODE_ENV,
      }
    }, { status: 500 });
  } finally {
    // Always disconnect
    await prisma.$disconnect();
  }
}