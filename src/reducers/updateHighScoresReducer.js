import { UPDATE_HIGH_SCORES } from '../actions/types'

function updateHighScoresReducer(state=[], action) {
    switch (action.type) {
        case UPDATE_HIGH_SCORES:
            let currentHighScoresList =
                localStorage.getItem('scores') ?
                JSON.parse(localStorage.getItem('scores')) :
                []
            let newHighScoresList = [
                ...currentHighScoresList,
                action.newScore
            ]
            newHighScoresList.sort(function(n1, n2){
                return n2 - n1
            }) 
            newHighScoresList = newHighScoresList.slice(0, 3)
            localStorage.setItem('scores', JSON.stringify(newHighScoresList))
            return newHighScoresList
        default:
            return state
    }
}

export default updateHighScoresReducer