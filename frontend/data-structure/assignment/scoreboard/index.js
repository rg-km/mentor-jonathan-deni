class Score {
    constructor(name, correct, wrong, empty) {
        // TODO: answer here
        this.name = name; // nama siswa
        this.correct = correct;
        this.score = 4 * correct - wrong
    }
}

class Scores {
    constructor(scores) {
        // TODO: answer here
        this.scores = scores
    }

    topStudents() {
        // TODO: answer here
        let sortedScores = this.scores.sort((a, b) => {
            return b.score - a.score || // sort score
            b.correct - a.correct || // sort jawaban benar
            a.name.localeCompare(b.name) // sort alphabet
        });
        
        return sortedScores.map(score => score.name)
    }
}

module.exports = {
    Score,
    Scores
}
