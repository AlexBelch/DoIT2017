var path = require('path');

module.exports = {
  entry: './assets/js/index.js', // файл который нужно обработать
  output: {
    filename: 'bundle.js', // имя файла
    path: path.resolve(__dirname, 'dist') // путь файла который будет собран
  },
  // Add the JSHint loader
  module: {
    rules: [{
      test: /\.js$/, // Выполнить загрузчик на всех файлах .js
      exclude: /node_modules/, // игнорировать все в папке node_modules
      loader: "babel-loader",
      //use: 'jshint-loader'
    }]
  }
};
