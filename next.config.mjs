/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: '/me',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
