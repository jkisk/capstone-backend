const fs = require('fs')
const knex = require('../../db/index')

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
//=> […, 'abmhos', 'abnegate', …]


function permut(string) {
    if (string.length < 3) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i = 0; i < string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length)

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}


function validate(arr) {
    let result = []
    for (let ele of arr) {
        if (wordArray.indexOf(ele) > -1) {
            result.push(ele)
        }
    }
    return result
}

function newGame(id){
    return (
        knex('games')
            .where({ 'id': id })
            .first()
    )
}

function createGame(string){
    let validArr
    let wordArr = permut(string)
    .then(() => {
        validArr = validate(wordArr)
    })
    return (
        knex('games')
        .insert({playletters:string, validwords: validArr})
        .returning('*')
    )

}

createGame('rstlned')





module.exports = { permut, validate, newGame, createGame }