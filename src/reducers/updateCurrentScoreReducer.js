import { UPDATE_CURRENT_SCORE } from '../actions/types'

function updateCurrentScoreReducer(state=0, action) {
    switch (action.type) {
        case UPDATE_CURRENT_SCORE:
            return action.score
        default:
            return state
    }
}

export default updateCurrentScoreReducer