const fs = require('fs')

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');
 
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
//=> […, 'abmhos', 'abnegate', …]


function permutations(string) {
    if (string.length < 2) return [string]
     const perms = []
    const validPerms = []
 
     for (var i=0; i<string.length; i++) {
         const char = string[i];
         if (string.indexOf(char) != i) 
             continue
        const remainingString = string.slice(0,i) + string.slice(i+1,string.length)
         for (let subPermutation of permutations(remainingString))
             perms.push(char + subPermutation)
     }
     for (let ele of perms) {
         if (wordArray.indexOf(ele) > -1) {
             validPerms.push(ele)
         }

     }
     console.log(validPerms)
     return validPerms;
    }

    module.exports = {permutations}