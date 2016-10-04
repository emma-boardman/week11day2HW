config = {
// needs to know our source and destination
// source = unminified node js nodels/views/data
     entry: './src/app.js',
     output: {
      filename: "bundle.js",
      path: "./build"
     }, 
     devtool: 'source-map'
}

module.exports = config;