let youtubeAPIPromise: Promise<void> | null = null;

export function loadYouTubeAPI(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (window.YT && window.YT.Player) {
    return Promise.resolve();
  }

  if (!youtubeAPIPromise) {
    youtubeAPIPromise = new Promise((resolve) => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.id = 'youtube-iframe-api';

      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(tag, firstScript);

      window.onYouTubeIframeAPIReady = () => resolve();
    });
  }

  return youtubeAPIPromise;
}
