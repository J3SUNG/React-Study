const path = require('path');

module.exports = {
   name: 'wordrelay-setting',
   mode: 'development',
   devtool: 'eval',

   entry: {
      app: ['./client', 'WordRelay'],
   }, 
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js',
   },
};