// ■ from Ceane La. © 2020
// ceanela.github.io
module.exports = {
  presets: ['@storybook/preset-typescript'],
  stories: ['../packages/**/src/*.story.[tj]sx'],
  webpackFinal: async config => {
    console.log(config.module.rules[2].use)
    
    return config;
  }
}