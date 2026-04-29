import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '32px',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'system-ui',
          }}
        >
          JS
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}