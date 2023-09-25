/** @type {import('next').NextConfig} */

const base = "2023";

const nextConfig = {
  output: "export",
  assetPrefix: `/${base}`,
  basePath: `/${base}`,
};

module.exports = nextConfig;
