'use client';

import { useState } from 'react';
import RichTextEditor from '@/components/Dashboard/RichTextEditor';

export default function NewOfferPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ title, content });
    // You would typically send this data to your API
  };

  return (
    <main style={{ 
      padding: '2rem', 
      fontFamily: 'sans-serif',
      backgroundColor: '#f9f3f3',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ 
        width: '90%', 
        backgroundColor: '#6c92e6', 
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Offer Name field with label */}
          <div style={{ display: 'flex' }}>
            <div style={{ 
              backgroundColor: '#e74c3c', 
              color: 'white',
              padding: '0.75rem 1rem',
              borderTopLeftRadius: '4px',
              borderBottomLeftRadius: '4px',
              display: 'flex',
              alignItems: 'center'
            }}>
              Offer Name
            </div>
            <input 
              type="text" 
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ 
                flex: 1,
                padding: '0.75rem',
                border: 'none',
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px',
                outline: 'none'
              }} 
            />
          </div>
          
          {/* Rich Text Editor for Offer Content */}
          <div>
            <RichTextEditor 
              value={content}
              onChange={setContent}
              placeholder="Offer Content // Up to 700 words"
            />
          </div>
          
          {/* Send button */}
          <button 
            type="submit" 
            style={{ 
              width: '160px',
              padding: '0.75rem', 
              backgroundColor: '#e74c3c', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            SEND
          </button>
        </form>
      </div>
    </main>
  );
} 