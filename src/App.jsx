import React from 'react';

export default function LinkDirectory() {
  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '5px' }}>Silas Revere</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>Computer Science</p>

      <div style={linkGroupStyle}>
        {/* The mailto: protocol will automatically open the user's default email client */}
        <a href="srevere7777@gmail.com" style={buttonStyle}>Email</a>
        <a href="https://linkedin.com/in/silas-revere" target="_blank" rel="noreferrer" style={buttonStyle}>LinkedIn</a>
        <a href="https://github.com/reveresj-design" target="_blank" rel="noreferrer" style={buttonStyle}>GitHub</a>
      </div>
    </div>
  );
}

// Basic inline styles for a clean, centered layout
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  fontFamily: 'system-ui, sans-serif',
  backgroundColor: '#f9f9f9',
  color: '#333'
};

const linkGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '100%',
  maxWidth: '300px'
};

const buttonStyle = {
  padding: '12px 20px',
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  textDecoration: 'none',
  textAlign: 'center',
  borderRadius: '8px',
  fontWeight: '600',
  transition: 'transform 0.2s'
};