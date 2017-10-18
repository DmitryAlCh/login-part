// takes username form user input and checks if 
// user exists, returns password for comparrison


findEntry = async (entryName, localEntries) => {
    return new Promise ((resolve, reject) => {
        if (Array.isArray(localEntries) && localEntries.length>=1){
            let foundEntry = localEntries.filter((element) => element.userName === entryName);
            if (!foundEntry || foundEntry.length <1 ){
                console.log('Entry not found');
                resolve(false);
            } else {
                console.log(foundEntry[0]);
                resolve(foundEntry[0]);
            }
        }
    });
    
}

module.exports = {
    findEntry
}