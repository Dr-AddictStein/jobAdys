import { PrismaClient } from '@prisma/client';

// Initialize PrismaClient with logging to help debug
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
    errorFormat: 'pretty',
  });
};

// Check if we're in a Node.js environment and not in a browser
const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || prismaClientSingleton();

// Test the connection
async function testConnection() {
  try {
    console.log('Testing database connection...');
    await prisma.$connect();
    console.log('Database connection successful!');
    return true;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    return false;
  }
}

// Only set the global prisma in development to prevent connection issues
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Initial connection test
testConnection()
  .then(() => console.log('Prisma client initialized'))
  .catch(console.error);

export default prisma; 