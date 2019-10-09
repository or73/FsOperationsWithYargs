// yargs library
const argv = require('yargs').argv;
// fs library
const fs = require('fs');
// readline library
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// folder name
const folderName = 'filename';
// file content
const fileContent = 'Your are awesome';
// Current dir path
const currentDirPath = __dirname + '/' + folderName;
// filename array
let filenameArray = [];


// Validate if folder "assignment1FS" already exists
if (fs.existsSync(currentDirPath)) {
    console.log('filename folder already exist... ' + currentDirPath);
    // If exist, then load all files name
    fs.readdirSync(currentDirPath, (err, files) => {
        console.log('Reading ' + currentDirPath + ' files...');
        if (files.length > 0) {
            console.log('Current directory contains %d files: ', files.length);
            for(let i = 0; i < files.length; i++) {
                // Store all filenames in "filename" array
                filenameArray.push(files[i]);
            }
        } else {
            console.log('Current directory is empty...');
        }
    });
    let newFileName = recursiveAsyncReadLine();
} else {
    console.log('filename folder does not exist, it will be created...');
    // else create folder
    fs.mkdirSync(currentDirPath);
}

function recursiveAsyncReadLine() {
    readLine.question('Provide a filename: ',
            fileName => {
                console.log('Provided filename: ', fileName);
                if (filenameArray.includes(fileName)) {
                    // filename already exist
                    console.log('Filename provided already exist... please try again...');
                    recursiveAsyncReadLine();
                } else {
                    // filename does not exist
                    console.log('Provided filename does not exist, it has been created...');
                    // Add a filename to filenameArray
                    filenameArray.push(fileName);
                    console.log('filenameArray: ', filenameArray);
                    // create new file with provided filename
                    createNewFile(fileName);
                    return readLine.close();
        }
    });
}

function createNewFile(fileName) {
    fs.writeFileSync(currentDirPath + '/' + fileName, fileContent);
}

