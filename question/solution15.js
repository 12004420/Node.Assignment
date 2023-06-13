const fs = require('fs');

const oldFilePath = 'mynewfile1.txt';
const newFilePath = 'myrenamedfile.txt';

fs.rename(oldFilePath, newFilePath, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
    return;
  }

  console.log('File renamed successfully.');
});