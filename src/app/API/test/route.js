import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Test API is working' });
}

export async function POST(req) {
  try {
    const body = await req.json();
    return NextResponse.json({ message: 'POST request received', data: body });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON data' }, { status: 400 });
  }
}

export async function PUT(req) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());
    return NextResponse.json({ message: 'PUT request received', data });
  } catch (error) {
    console.error('Error in test PUT handler:', error);
    return NextResponse.json({ error: 'Error processing form data' }, { status: 400 });
  }
} 