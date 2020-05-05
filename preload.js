// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const eless = require('electron-less');

console.log('loading');


window.addEventListener('DOMContentLoaded', () => {
  console.log('Loaded');

  // Hide loaded
  var loader = document.getElementById("app-loader-wrapper");
  setTimeout(function() {
    var currentOpacity = 1;
    var hideInterval = setInterval(function() {
		if ( currentOpacity > 0 ) {
			currentOpacity -= 0.05;
			loader.style.cssText = "opacity: "+ currentOpacity +";";
		} else {
			loader.remove();
			clearInterval(hideInterval);
		}
    }, 10);
  }, 0);

  
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
