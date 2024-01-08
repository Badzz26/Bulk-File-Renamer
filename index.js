const fs = require('fs');

const replaceThis = "badzz";
const replaceWith = "badz";

const preview = false;

try {
    fs.readdir("data", (err, data) => {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newFile = "data/" + item.replaceAll(replaceThis, replaceWith);
            if(preview){

                fs.rename("data/" + item, newFile, () => {
                    console.log("Rename successful")
                }); 
            }
            else{
                if("data/"+item !== newFile) console.log("data/" + item + " will be renamed to " + newFile);
            }
        }
    })
} catch (error) {
    console.log(err);
}