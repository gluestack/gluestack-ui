/**
 * exporter/image-resolver.ts
 * ---------------------------
 * Resolves image URLs to base64 data URIs before sending to the Figma plugin.
 * This avoids CORS failures inside the Figma sandbox where external URLs
 * cannot be fetched. Falls back to the raw URL if resolution fails.
 */

import { IMAGE_QUALITY, RESOLVE_IMAGES } from "./constants";

export async function resolveImageToBase64(
  url: string,
): Promise<string> {
  if (!RESOLVE_IMAGES) return url;
  if (url.startsWith("data:")) return url;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) return url;
    const blob = await response.blob();
    return await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        if (blob.type.startsWith("image/") && blob.type !== "image/svg+xml") {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d")!;
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL("image/jpeg", IMAGE_QUALITY));
          };
          img.onerror = () => resolve(dataUrl);
          img.src = dataUrl;
        } else {
          resolve(dataUrl);
        }
      };
      reader.onerror = () => resolve(url);
      reader.readAsDataURL(blob);
    });
  } catch {
    return url;
  }
}

async function resolveImageInStyles(styles: any): Promise<void> {
  if (!styles?._imageSrc) return;
  if (!styles._imageSrc.startsWith("data:")) {
    styles._imageSrc = await resolveImageToBase64(styles._imageSrc);
  }
}

export async function resolveVariantImages(variant: any): Promise<void> {
  if (!variant) return;
  await resolveImageInStyles(variant.styles);
  for (const child of variant.children ?? []) {
    await resolveVariantImages(child);
  }
}
