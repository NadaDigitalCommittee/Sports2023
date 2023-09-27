/** @type {import('next').NextConfig} */

const base = "2023";
const withExportImages = require('next-export-optimize-images')

const nextConfig = withExportImages({
  output: "export",
  assetPrefix: `/${base}`,
  basePath: `/${base}`,
})

module.exports = nextConfig;
