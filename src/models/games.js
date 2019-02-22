const fs = require('fs')
const knex = require('../../db/index')
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');


// Return a single game object by id
function newGame(id) {
    return (
        knex('games')
            .where({ 'id': id })
            .first()
    )
}

// Make a new game object and store it in db
function createGame(string) {
    const validArr = validWords(wordArray, string)
    return (
        knex('games')
            .insert({ playletters: string, validwords: { validArr } })
            .returning('*')
    )

}

// Get the top 30 high scores to populate high score table
function getScores() {
    return (
        knex('high_scores')
            .select('players.playername', 'high_scores.score', 'high_scores.created_at')
            .join('players', 'players.id', 'high_scores.player_id')
            .orderBy('score', 'desc')
            .limit(30)
    )
}

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





module.exports = { newGame, createGame, getAllGames, getScores }