const fs = require('fs');

const filePath = 'mynewfile2.txt';

fs.unlink(filePath, (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }

  console.log('File deleted successfully.');
});