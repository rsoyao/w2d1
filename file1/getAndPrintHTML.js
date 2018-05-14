var https = require('https');
var str = '';

function getAndPrintHTML () {

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response){
    response.setEncoding('utf8');
    response.on('data', function (data){
      str += data;
      // used to add the string into the empt4y variable in case you wanted
      // to call it back into the function
    });
    response.on('end', function(){
      console.log('Nice!! Length:', str);
    });
  });

}
 getAndPrintHTML();