// yargs library
const argv = require('yargs').argv;
// fs library
const fs = require('fs');
// folder name
const folderName = 'filename';
// file content
const fileContent = 'Your are awesome';
// Current dir path
const currentDirPath = __dirname + '/' + folderName;
// filename array
let filenameArray = [];

let createNewFile = fileName => {
    console.log('createNewFile: ', fileName);
    fs.writeFileSync(currentDirPath + '/' + fileName, fileContent, 'utf8');
};

let yargData = () => {
    console.log('4. filenameArray: ', filenameArray);
    console.log('5. typeof argv.filename: ', typeof argv.filename);
    console.log('6. argv.filename: ', argv.filename);
    console.log('7. filenameArray: ', filenameArray);
    if (argv.filename && argv.filename.length > 0) {
        console.log('8. filename has been provided...');
        if (filenameArray.includes(argv.filename)) {
            console.log('9. Filename provided exist already, try again...')
        } else {
            console.log('9. A new Filename has been provided...');
            filenameArray.push(argv.filename);
            createNewFile(argv.filename);
        }
    } else {
        console.log('8. Please try again, and provide a filename');
    }
};

// Validate if folder "filename" already exists
if (fs.existsSync(currentDirPath)) {
    console.log('1. filename folder already exist... ' + currentDirPath);
    // If exist, then load all files name
    let files = fs.readdirSync(currentDirPath);
    
    
    console.log('2. Reading ' + currentDirPath + ' files...');
    if (files.length > 0) {
        console.log('3. Current directory contains %d files: ', files.length);
        for(let i = 0; i < files.length; i++) {
            // Store all filenames in "filename" array
            filenameArray.push(files[i]);
        }
    } else {
        console.log('3. Current directory is empty...');
    }
} else {
    console.log('1. filename folder does not exist, it will be created...');
    // else create folder
    fs.mkdirSync(currentDirPath);
}
yargData();
