import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check environment variables (masked for security)
    const databaseUrl = process.env.DATABASE_URL || 'not set';
    const maskedDbUrl = databaseUrl !== 'not set' 
      ? `${databaseUrl.substring(0, 15)}...${databaseUrl.substring(databaseUrl.indexOf('@'))}` 
      : 'not set';
    
    return NextResponse.json({
      message: 'Debug info',
      env: {
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL_SET: !!process.env.DATABASE_URL,
        DATABASE_URL_MASKED: maskedDbUrl,
        JWT_SECRET_SET: !!process.env.JWT_SECRET,
      },
      runtime: {
        node_version: process.version,
        platform: process.platform,
      }
    });
  } catch (error) {
    console.error('Debug error:', error);
    return NextResponse.json({ 
      error: 'Debug endpoint error', 
      message: error.message 
    }, { status: 500 });
  }
} 