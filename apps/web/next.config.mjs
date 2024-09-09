import withPWAInit from "@ducanh2912/next-pwa";

export default withPWAInit({ dest: "public", register: true, scope: "/app" })({
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: false },
  experimental: { instrumentationHook: true },
  typescript: { ignoreBuildErrors: false, tsconfigPath: "./tsconfig.json" },
  images: {
    loader: "default",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "3001" },
      { protocol: "https", hostname: "stg-andrew-ross.vercel.app" },
      { protocol: "https", hostname: "andrew-ross.vercel.app" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  },
  productionBrowserSourceMaps: true,
  swcMinify: true
});
