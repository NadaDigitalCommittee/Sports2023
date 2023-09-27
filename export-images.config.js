/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    basePath: "/2023",
    filenameGenerator: ({ path, name, width, quality, extension }) =>
        `${path.replace(/^\//, '').replace(/\//g, '-')}-${name}.${width}.${quality}.${extension}`,
}

module.exports = config