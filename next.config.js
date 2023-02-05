/** @type {import('next').NextConfig} */

const repo = process.env.NEXT_PUBLIC_FOLDER || 'loopstudios';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withTM({
  mode: 'universal',
  reactStrictMode: false,
  swcMinify: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
  },
});
