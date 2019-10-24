import { UPDATE_LINES } from '../actions/types'

function updateLinesReducer(state=0, action) {
    switch (action.type) {
        case UPDATE_LINES:
            return action.lines
        default:
            return state
    }
}

export default updateLinesReducer