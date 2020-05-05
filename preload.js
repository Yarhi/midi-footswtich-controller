// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const eless = require('electron-less');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
  
  eless({
      //options.source is required
      source: __dirname + '/src/less/app.less',
      //options.id is optional.
      //options.id defaults to hasha(source)
      //options.variables is optional
      //options.variables gets turned into less variables
      //that get prefixed to the options.source file text
  }).then(()=>{
      console.log('Styles appended to head element')
  });
})
