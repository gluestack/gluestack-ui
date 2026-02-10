# Adding Background Music

The video currently includes a subtle tech/ambient background track from Pixabay (royalty-free, no attribution required).

## Current Setup

The video uses a copyright-free track loaded from a CDN URL. This works out of the box but requires internet connection during rendering.

## Recommended: Use Local Audio File

For better reliability and control, download and use a local audio file:

### Step 1: Download Copyright-Free Music

**Best sources:**

1. **Pixabay Music** (No attribution required)
   - https://pixabay.com/music/
   - Search: "tech ambient", "minimal electronic", "corporate"
   - License: Free for commercial use, no attribution required

2. **YouTube Audio Library**
   - https://www.youtube.com/audiolibrary
   - Filter by "No attribution required"
   - Download MP3

3. **Free Music Archive**
   - https://freemusicarchive.org/
   - Search: Creative Commons tracks
   - Check license requirements

**Recommended tracks for this video:**
- "Technology" by Scott Buckley
- "Minimal Tech" (various artists on Pixabay)
- "Corporate Innovation" style tracks
- Duration: 15-30 seconds (can loop or trim)

### Step 2: Add to Project

1. Create `public` folder if it doesn't exist:
```bash
mkdir -p public
```

2. Place your audio file in the `public` folder:
```
apps/performance-tweet/public/background-music.mp3
```

### Step 3: Update the Code

Edit `src/PerformanceComparison.tsx`:

```tsx
// Comment out the URL version:
// <Audio
//   src="https://cdn.pixabay.com/audio/2022/05/13/audio_1e0e4c9e8c.mp3"
//   volume={0.2}
// />

// Uncomment and use the local file:
<Audio
  src={staticFile('background-music.mp3')}
  volume={0.25}
  startFrom={0}
  endAt={420}  // Match video duration in frames
/>
```

## Volume Guidelines

- **0.15-0.25**: Very subtle (recommended for professional videos)
- **0.25-0.35**: Noticeable background
- **0.35-0.50**: More prominent (use for energetic content)

Current setting: `0.2` (subtle, non-distracting)

## Audio Properties

```tsx
<Audio
  src={staticFile('your-audio.mp3')}
  volume={0.25}              // Volume level (0-1)
  startFrom={0}              // Start at frame 0
  endAt={420}                // End at frame 420 (14s @ 30fps)
  // playbackRate={1.0}      // Optional: speed up/slow down
  // loop={true}             // Optional: loop the audio
/>
```

## Tips

1. **Keep it subtle** - Background music should support, not dominate
2. **Match the mood** - Tech/ambient works best for dev tools
3. **Test volume** - Preview in Remotion Studio to adjust
4. **Consider silence** - Some audiences prefer no music (especially on LinkedIn)

## No Music Option

To remove background music entirely, simply delete or comment out the `<Audio>` component:

```tsx
{/* <Audio src={...} volume={0.2} /> */}
```

## License Compliance

Always verify the license of your chosen music:
- ✅ Public Domain
- ✅ CC0 (Creative Commons Zero)
- ✅ Royalty-free with commercial use allowed
- ⚠️ Check if attribution is required
- ❌ Avoid copyrighted music without proper licensing
