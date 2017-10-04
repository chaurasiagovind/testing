module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.bundle.js',
    'dist/**.bundle.js.map',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html'
};