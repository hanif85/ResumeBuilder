/** @type {import('next').NextConfig} */
// import('next').NextConfig
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['img.icons8.com'],
  },
  eslint: {
    dirs: ['src/pages', 'src/core', 'src/stores', 'src/templates', 'src/home'],
  },
};

// console.log('Config applied');
