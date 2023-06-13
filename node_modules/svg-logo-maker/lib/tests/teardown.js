const fs = require('fs');
const path = require('path');

module.exports = function () {
  if (fs.existsSync(path.join(process.cwd(), 'logo.svg'))) {
    fs.rmSync(path.join(process.cwd(), 'logo.svg'), { force: true });
  }
};
