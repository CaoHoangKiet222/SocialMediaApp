const fs = require('fs');
const path = require('path');

const loadFile = function (file) {
   try {
      const pathToRequest = path.join(__dirname, `../dbjson/${file}.json`);
      const dataBuffer = fs.readFileSync(pathToRequest);
      const dataJSON = dataBuffer.toString();
      console.log(pathToRequest);
      return JSON.parse(dataJSON);
   }
   catch {
      return new Array();
   }
}

const saveFile = function (file, data) {
   const pathToRequest = path.join(__dirname, `../dbjson/${file}.json`);
   fs.writeFileSync(pathToRequest, data);
}

module.exports = {
   loadFile: loadFile,
   saveFile: saveFile
}
