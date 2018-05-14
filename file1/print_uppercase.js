var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var str = [];
  var newStr = str.toUpperCase();
  return newStr;
}

printUpperCase(html);
