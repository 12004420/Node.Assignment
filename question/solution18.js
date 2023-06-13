const fs = require('fs');

function checkFileExists(filePath) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.access(filePath, fs.constants.F_OK, (error) => {
        if (error) {
          reject(new Error('File does not exist'));
        } else {
          resolve();
        }
      });
    }, 1000);
  });
}

checkFileExists('/path/to/file.txt')
  .then(() => {
    console.log('File exists');
  })
  .catch((error) => {
    console.error('File does not exist:', error.message);
  });
