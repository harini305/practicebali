/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images are pre-optimised locally (scripts/optimize-images.mjs), so the
  // Next.js / Vercel image optimisation service is not used.
  images: { unoptimized: true },

  // Let browsers keep the pre-optimised images for a year so repeat visits
  // don't hit the CDN again. If an image changes, regenerate it under a new
  // file name (the width suffix or set name) rather than overwriting it.
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
