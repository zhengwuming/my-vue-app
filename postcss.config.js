module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    cssnano: {
      autoprefixer: false,
      zindex: false,
      discardComments: {
        removeAll: true
      },
      reduceIdents: false
    },
    'postcss-pxtorem': {
      rootValue: 75,
      unitPrecision: 2,
      propList: [
        '*'
      ],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 2
    }
  }
}
