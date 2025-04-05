'use client';

import Image from "next/image";
import { useUser } from '@/hooks/useUser';
import { useState, useEffect } from 'react';

export default function SubmitterDashboardPage() {
  const { user, name } = useUser();
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [loginTime, setLoginTime] = useState('');
  
  useEffect(() => {
    // Format current date for display
    const now = new Date();
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      weekday: 'long' 
    };
    setCurrentDateTime(now.toLocaleDateString('en-US', options));
    
    // Create login time format
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    
    setLoginTime(`[${hours}:${minutes}:${seconds} , ${day}.${month}.${year}]`);
  }, []);

  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ padding: '1rem' }}>
        <h2 style={{ margin: '0', fontWeight: '600' }}>Hello {name || 'User'},</h2>
        <p style={{ margin: '0.5rem 0 2rem' }}>Today is {currentDateTime}. A perfect time to be a part of JobAdys.</p>
        
        <div style={{ 
          border: '1px solid #ccc', 
          borderRadius: '0.5rem', 
          padding: '1rem', 
          margin: '1rem 0 2rem', 
          boxShadow: '0 0 5px rgba(0,0,0,0.1)' 
        }}>
          <h3 style={{ margin: '0 0 0.5rem', fontWeight: '600' }}>System notification</h3>
          <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>- Sing in {loginTime} from Slovakia,Bratislava by next ip:192.168.1.1</p>
          <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>- Sing in {loginTime} from Slovakia,Bratislava by next ip:192.168.1.1</p>
        </div>
      </div>
      
      <div style={{
        backgroundColor: '#5E6FBD',
        color: 'white',
        padding: '3rem 1rem',
        textAlign: 'center',
        marginTop: '1rem',
        paddingBottom: '4rem',
        width: '100%',
        borderRadius: '0.5rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
          <Image src="/Group 18.png" alt="JobAdys Logo" width={40} height={60} />
        </div>
        <h2 style={{ fontWeight: '500', margin: '0.5rem 0' }}>Over <span style={{ fontSize: '2.2rem', fontWeight: '600' }}>100,000</span> Jobseekers Have Used</h2>
        <h2 style={{ fontWeight: '500', margin: '0.5rem 0' }}>JobAdys to Find the Best Way to Work</h2>
      </div>
    </main>
  );
}
