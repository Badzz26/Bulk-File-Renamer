BulkFile Renamer is useful when you have a folder that have multiple files with same name and you wish to avoid cumbersome process of renaming the files one at a time. 
This project uses JS, and a node module called "fs" for handling file system.

STEPS TO RUN THIS PROJECT:
1. Clone this repo in your local environment.
2. In the folder structure, there would be a folder named "data". Create as many files in that folder with same name (& different extensions).
3. Make changes in below variables:
   If you have created all the files with a name "demo", then make following changes in the code:
    const replaceThis = "demo";
    const replaceWith = "AnythingYouDesire";
4. Run the code.
5. All the files will be renamed to "AnythingYouDesire"
