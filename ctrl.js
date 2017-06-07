var testController = function (app) {
 var ffmpeg = require('fluent-ffmpeg');


var proc = new ffmpeg({ source: 'http://www.w3schools.com/html/mov_bbb.mp4' })
  .usingPreset('podcast')
  .saveToFile('public/t.mp4', function(stdout, stderr) {
    console.log('file has been converted succesfully');
  });
};
module.exports = testController;