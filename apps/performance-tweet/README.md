# Performance Tweet Video

A Remotion video showcasing the performance improvement of gluestack-ui v4.1 alpha with Uniwind support.

## What this video shows

- Performance comparison rendering 1000 buttons
- NativeWind: ~180ms
- Uniwind: ~110ms (39% faster!)
- Announcement of gluestack-ui v4.1 alpha release

## Video specs

- Duration: 10 seconds (300 frames @ 30fps)
- Resolution: 1080x1080 (Square format for Twitter/X)
- Format: MP4

## Getting Started

1. Install dependencies:
```bash
cd apps/performance-tweet
npm install
```

2. Preview the video:
```bash
npm start
```

This will open the Remotion Studio in your browser where you can preview and scrub through the video.

3. Render the video:
```bash
npm run render
```

The rendered video will be saved to `out/performance.mp4`.

## Customization

To customize the video, edit `src/PerformanceComparison.tsx`:

- Change colors in the chart bars
- Adjust timing of animations
- Modify text content
- Update performance numbers

## Rendering for Twitter/X

The video is already configured for Twitter/X with:
- Square aspect ratio (1080x1080)
- 10-second duration (Twitter's limit for standard accounts)
- High-quality output suitable for social media

## Additional render options

For different formats or quality:

```bash
# Render with higher quality
npx remotion render PerformanceComparison out/performance.mp4 --quality 95

# Render as GIF
npx remotion render PerformanceComparison out/performance.gif

# Render specific frame range
npx remotion render PerformanceComparison out/performance.mp4 --frames=0-150
```
