require('dotenv').config()

module.exports = (env) => {
  return {
    entry: './app/index.tsx',
    output: {
      filename: './app.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      fallback: {
        crypto: false,
        path: false,
      },
      alias: {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|tsx?)$/,
          exclude: /(node_modules)/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },

        {
          test: /\.svg$/i,
          use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        },
      ],
    },
  }
}
