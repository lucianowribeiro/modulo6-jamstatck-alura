const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@lucianowribeiro/modulo-comum",
]);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
