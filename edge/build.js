const fs = require('fs-extra');
const childProcess = require('child_process');

try {
  // Remove current build
  fs.removeSync('./dist/');
  childProcess.exec('tsc --build tsconfig.production.json');
} catch (err) {
  console.log(err);
}