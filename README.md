# Assignment 1 - Edureka

## FS Operations With Yargs
### Objective
- You need to write in file using fs module and for every write operation you need to create a new file. 
- You must take input from the user as filename and keep saving filenames in one array, in one separate text file.  
- Next time when user again executes the code ask user to provide filename.  Check if file already exists, if yes then ask user to give new filename.  Write simple text “Your are awesome” in every new file.   
- Share the code by pushing it on Github.  

### Applications
Two applications have been developed for this Assignment: 
#### 1. app.js
To run this app write this in the console:    

```javascript
node assignment1.js
```   

#### 2. app1.js - Use yargs
To run this app write this in the console: 

```javascript
node assignment1_1.js --filename="filenameExample.txt"
```
> **filenameExample.txt** should be replaced by your desired filename.

### Application Procedure
The application procedure is:   
1. Validates if the 'filename' folder already exist.  
2. Loads all file names contained in 'filename' folder into an array.  
3. Asks to the user about a new filename.  
4. Validates if the provided filename already exist in the created array, which contains files contained 'filename' folder.   
5. If provided filename already exists:   
   - Then, applicatoin asks user to provide a new filename.  
6. If provided filename does not exist:   
   - Then, new filename is added to the file names array, and a new file is created with the provided filename, with content "you are awesome", into the 'filename' folder.    
