// src/app/layout.js
import "@/styles/globals.css";

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
  