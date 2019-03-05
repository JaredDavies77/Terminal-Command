const fs = require('fs');
 
module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file} `;
          }, '');
       
          console.log(filesToString);
    });
};

module.exports.touch = () => {
    fs.writeFile(path, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('The file has been created!');
        }
      });      
};

module.exports.mkdir = () => {
    fs.mkdir(path, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('The directory has been created!');
        }
      });      
};


};