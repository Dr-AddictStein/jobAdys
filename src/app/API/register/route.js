import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
  try {
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password || !role) {
      return new Response(JSON.stringify({ error: 'All fields required' }), { status: 400 });
    }

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return new Response(JSON.stringify({ error: 'Email already in use' }), { status: 400 });
    }

    const hashed = await hash(password, 10);
    await prisma.user.create({ data: { name, email, password: hashed, role } });

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (e) {
    console.error('Registration error:', e);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
