const fs = require('fs')

var obj = JSON.parse(fs.readFileSync('./build/asset-manifest.json', 'utf8'));

fs.writeFileSync('./build/getAssetsPaths.js', `const newPathToMainJs = "${obj.files["main.js"]}"

var s = document.createElement('script');
s.type = "text/javascript";
s.async = true;
s.src = window.INJECTED_APP_URL + newPathToMainJs;

var head = document.getElementsByTagName('head')[0];
head.appendChild(s);`)