// ■ from Ceane La. © 2020
// https://ceane.la
module.exports = {
  addons: ['@storybook/preset-typescript'],
  stories: ['../packages/**/src/*.story.[tj]sx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('awesome-typescript-loader'),
    });
    config.resolve.extensions.push('.ts', '.tsx')
    
    return config
  }
}
