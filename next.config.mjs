/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http://localhost:3000/",
        port: "",
        pathname: "https://rb.gy/ulxxee",
      },
    ],
  },
};

export default nextConfig;
