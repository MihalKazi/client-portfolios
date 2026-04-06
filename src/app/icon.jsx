import { ImageResponse } from 'next/og';

// Tell Next.js the exact size of a standard favicon
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#18181b', // Dark 'ink' background (Zinc 900)
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #ef4444', // Red 'alert' border
          borderRadius: '4px', // Slight tech-style rounding
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: '-0.5px',
          }}
        >
          <span style={{ color: '#ffffff' }}>M</span>
          <span style={{ color: '#ef4444' }}>A</span>
        </div>
      </div>
    ),
    { ...size }
  );
}