/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://code.tidio.co https://*.tidio.co; connect-src 'self' https://*.tidio.co; frame-src 'self' https://*.tidio.co; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' data:;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
