module.exports = {
  presets: [
    "@babel/env",
    "@babel/preset-react"
  ],
  plugins: [
    [
      "@babel/plugin-proposal-class-properties",
      { loose: false }
    ],
    ["@babel/plugin-proposal-private-methods", { loose: false }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: false }],
    ['transform-react-remove-prop-types', { removeImport: 'true' }],
  ]
}