module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":750,"linkImagesToOriginal":false},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
