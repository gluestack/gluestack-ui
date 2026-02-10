# Audio File Setup

## Quick Setup - Download Royalty-Free Music

The video needs a `background-music.mp3` file in this folder.

### Recommended: Short Tech/Ambient Tracks

Download one of these copyright-free tracks (15-30 seconds):

1. **Pixabay** (No attribution required)
   - Visit: https://pixabay.com/music/search/tech%20ambient/
   - Search: "tech ambient" or "minimal electronic"
   - Filter: Duration 15-30 seconds
   - Download as MP3
   - Rename to `background-music.mp3`

2. **YouTube Audio Library** (Free)
   - Visit: https://studio.youtube.com/channel/UC/music
   - Genre: Electronic/Ambient
   - Duration: 0-30 seconds
   - Download and rename

3. **Free Music Archive**
   - Visit: https://freemusicarchive.org/
   - Search: "minimal tech" or "corporate ambient"
   - License: CC0 or Public Domain

### Quick Download Command

Or use this command to download a suitable track:

```bash
# Example: Download from a royalty-free source
curl -L "YOUR_MUSIC_URL_HERE" -o background-music.mp3
```

### Verify Setup

After downloading, verify the file:

```bash
ls -lh background-music.mp3
```

You should see a file that's 1-3 MB for a 15-30 second track.

### Tips

- Keep the track 15-30 seconds (longer than the 14s video is fine)
- Choose ambient/minimal style to avoid distraction
- MP3 format works best for Remotion
- Lower bitrate (128-192 kbps) is sufficient and keeps file size down
