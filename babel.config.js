module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "modules": 'commonjs',
          "esmodules": false,
          "useBuiltIns": "usage",
          "ignoreBrowserslistConfig": true
        }
      }
    ]
  ]
}