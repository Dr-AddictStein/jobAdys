'use client';

import { useState, useRef, useEffect } from 'react';

const RichTextEditor = ({ value, onChange, placeholder }) => {
  const editorRef = useRef(null);
  const [focused, setFocused] = useState(false);

  // Sync the HTML content with the parent component
  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML && !focused) {
      editorRef.current.innerHTML = value;
    }
  }, [value, focused]);

  // Handle content changes
  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  // Execute commands for text formatting
  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    handleInput();
    editorRef.current.focus();
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Toolbar */}
      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '8px', 
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px',
        borderBottom: '1px solid #ddd'
      }}>
        {/* Text formatting options */}
        <button 
          type="button" 
          onClick={() => execCommand('formatBlock', '<h2>')}
          style={{ 
            padding: '4px 8px', 
            background: 'none', 
            border: '1px solid #ccc',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
          title="Heading"
        >
          H
        </button>
        <button 
          type="button" 
          onClick={() => execCommand('bold')}
          style={{ 
            padding: '4px 8px', 
            background: 'none', 
            border: '1px solid #ccc',
            borderRadius: '3px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          title="Bold"
        >
          B
        </button>
        <button 
          type="button" 
          onClick={() => execCommand('italic')}
          style={{ 
            padding: '4px 8px', 
            background: 'none', 
            border: '1px solid #ccc',
            borderRadius: '3px',
            cursor: 'pointer',
            fontStyle: 'italic'
          }}
          title="Italic"
        >
          I
        </button>
        <button 
          type="button" 
          onClick={() => execCommand('underline')}
          style={{ 
            padding: '4px 8px', 
            background: 'none', 
            border: '1px solid #ccc',
            borderRadius: '3px',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
          title="Underline"
        >
          U
        </button>

        {/* Lists */}
        <button 
          type="button" 
          onClick={() => execCommand('insertUnorderedList')}
          style={{ 
            padding: '4px 8px', 
            background: 'none', 
            border: '1px solid #ccc',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
          title="Bullet List"
        >
          • List
        </button>
        <button 
          type="button" 
          onClick={() => execCommand('insertOrderedList')}
          style={{ 
            padding: '4px 8px', 
            background: 'none', 
            border: '1px solid #ccc',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
          title="Numbered List"
        >
          1. List
        </button>

        {/* Link */}
        <button 
          type="button" 
          onClick={() => {
            const url = prompt('Enter link URL:');
            if (url) execCommand('createLink', url);
          }}
          style={{ 
            padding: '4px 8px', 
            background: 'none', 
            border: '1px solid #ccc',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
          title="Insert Link"
        >
          Link
        </button>
      </div>

      {/* Editable content area */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        style={{
          minHeight: '380px',
          height: 'auto',
          padding: '16px',
          backgroundColor: 'white',
          borderBottomLeftRadius: '4px',
          borderBottomRightRadius: '4px',
          outline: 'none',
          overflowY: 'auto',
          wordBreak: 'break-word'
        }}
        data-placeholder={placeholder}
      />

      <style jsx>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #888;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor; 