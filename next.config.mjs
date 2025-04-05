/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/public/hello',
          permanent: true, // or false if it's temporary
        },
      ];
    },
  };
  
  export default nextConfig;
  