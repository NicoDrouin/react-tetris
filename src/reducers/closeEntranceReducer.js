import { CLOSE_ENTRANCE } from '../actions/types'

function closeEntranceReducer(state=false, action) {
    switch (action.type) {
        case CLOSE_ENTRANCE:
            return true
        default:
            return state
    }
}

export default closeEntranceReducer