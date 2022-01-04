module.exports = {
  stories: [
    '../src/reTheme.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {},
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5"
  }
}