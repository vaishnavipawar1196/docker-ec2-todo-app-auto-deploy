const fs = require('fs');

exports.readData = (path) => {
    return JSON.parse(fs.readFileSync(path));
};

exports.writeData = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
};