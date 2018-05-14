module.exports = function getHTML (options, callback) {

var https = require('https');
var str = '';

  https.get(options, function (response){
    response.setEncoding('utf8');
    response.on('data', function (data){
      str += data;
      // used to add the string into the empt4y variable in case you wanted
      // to call it back into the function
    });
    response.on('end', function(){
      callback(str);
    });
  });


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

  function printHTML (html) {
    console.log(html);
  }
};

