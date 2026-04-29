# Logo Setup Instructions

## Files Updated

The following files have been updated to use the JointSave logo instead of icons:

1. `frontend/components/landing/header.tsx` - Landing page header
2. `frontend/components/dashboard/dashboard-header.tsx` - Dashboard header
3. `frontend/app/layout.tsx` - Favicon metadata
4. `README.md` - Project logo display

## Required Actions

You need to manually add the logo image files to the `frontend/public` directory:

### 1. Main Logo (PNG format - recommended)
- Save the logo image as: `frontend/public/jointsave-logo.png`
- Recommended size: 512x512px or larger (square format)
- This will be used in the headers

### 2. Favicon (ICO format)
- Create a favicon from the logo: `frontend/public/favicon.ico`
- Size: 32x32px or 16x16px
- This appears in browser tabs

### 3. Apple Touch Icon (optional but recommended)
- Save as: `frontend/public/apple-touch-icon.png`
- Size: 180x180px
- Used when users add the site to their iOS home screen

### 4. Additional Sizes (optional)
You can also create these for better display across devices:
- `frontend/public/jointsave-logo-192.png` (192x192px)
- `frontend/public/jointsave-logo-512.png` (512x512px)

## How to Create These Files

### From the provided logo image:

1. **For PNG logo** (jointsave-logo.png):
   - Extract just the logo icon (the circular JS symbol)
   - Make it square (equal width and height)
   - Save as PNG with transparent background
   - Recommended size: 512x512px

2. **For Favicon** (favicon.ico):
   - Use an online tool like https://favicon.io/favicon-converter/
   - Upload your logo PNG
   - Download the generated favicon.ico
   - Place in `frontend/public/`

3. **For Apple Touch Icon** (apple-touch-icon.png):
   - Resize your logo to 180x180px
   - Save as PNG
   - Place in `frontend/public/`

## Verification

After adding the logo files, verify they work:

1. Start the development server: `npm run dev`
2. Check the header - logo should appear instead of the Coins icon
3. Check browser tab - favicon should appear
4. Check on mobile - logo should be responsive

## Alternative: Use SVG

If you prefer SVG format (scalable, smaller file size):

1. Save the logo as `frontend/public/jointsave-logo.svg`
2. Update the Image components in the header files to use `.svg` instead of `.png`
3. SVG works great for logos but you'll still need favicon.ico for browser tabs

## Current Status

✅ Code updated to use logo images
⏳ Logo image files need to be added to `frontend/public/`
⏳ Favicon needs to be created and added

Once you add the image files, the logo will automatically appear throughout the application!
