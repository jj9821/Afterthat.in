import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/work/dizzire",
        destination: "/work/dizzire-silk-and-sarees",
        permanent: true,
      },
      {
        source: "/work/dizzire-silks-and-sarees",
        destination: "/work/dizzire-silk-and-sarees",
        permanent: true,
      },
      {
        source: "/work/milli-flame",
        destination: "/work/milli-flame-bistro-paris",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
