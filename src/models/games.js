const fs = require('fs')
const knex = require('../../db/index')

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
//=> […, 'abmhos', 'abnegate', …]


// Build an index of every word in the given string.
function validWords(dictionary, string) {
    const okWords = []
    dictionary.forEach(word => {
        if (word.length > 2) {
            let remaining = string
            // Count the characters in `word` that are in `string`.
            let foundCount = 0;
            while (foundCount < word.length) {
                const index = remaining.indexOf(word[foundCount])
                if (index >= 0) {
                    foundCount++
                    remaining = remaining.slice(0, index) +
                        remaining.slice(index + 1, remaining.length)

                } else {
                    break
                }
            }
            if (foundCount == word.length) {
                okWords.push(word)
            }
        }
    })
    return okWords
}



function newGame(id) {
    return (
        knex('games')
            .where({ 'id': id })
            .first()
    )
}

function createGame(string) {
    const validArr = validWords(wordArray, string)

    return (
        knex('games')
            .insert({ playletters: string, validwords: { validArr } })
            .returning('*')
    )

}

const getAllGames = () => knex('games')

function getScores() {
    return (
        knex('high_scores')
        // .join('players', 'players.id', 'high_scores.player_id')
        // .where('players.id', 'high_scores.player_id')
        // .select('playername', 'score')
        .orderBy('score', 'desc')
        .limit(30)
    )
}

validWords(wordArray, 'battles')





module.exports = { newGame, createGame, getAllGames, getScores }