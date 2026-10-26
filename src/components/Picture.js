import manifest from '@/data/image-manifest.json';

/**
 * Responsive <img> for the pre-generated WebP sets in public/images
 * (see scripts/optimize-images.mjs). Width/height come from the manifest
 * so the browser reserves space and nothing shifts while loading.
 */
export default function Picture({ set, alt, sizes = '100vw', priority = false, className }) {
  const entry = manifest[set];
  if (!entry) throw new Error(`Unknown image set: ${set}`);
  const { widths, ratio } = entry;
  const largest = widths[widths.length - 1];
  return (
    <img
      className={className}
      src={`/images/${set}-${largest}.webp`}
      srcSet={widths.map((w) => `/images/${set}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes}
      width={largest}
      height={Math.round(largest / ratio)}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}
