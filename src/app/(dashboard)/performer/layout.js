// src/app/layout.js
export const metadata = {
    title: 'JobAdys',
    description: 'JobAdys freelancing platform',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  