const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const { inspect } = require('util');

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  console.log(inspect(singleSpaWebpackConfig));

  singleSpaWebpackConfig.module.rules.forEach(rule => {
    console.log(`==========`)
    console.log(inspect(rule));
  });

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
