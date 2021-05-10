
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['a1YB7yhggR6a8UDUfJzSPJ'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  