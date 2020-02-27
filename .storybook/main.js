// ■ from Ceane La. © 2020
// https://ceane.la
module.exports = {
  addons: ['@storybook/preset-typescript', '@storybook/preset-create-react-app'],
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
