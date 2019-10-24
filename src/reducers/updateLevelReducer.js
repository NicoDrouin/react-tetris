import { UPDATE_LEVEL } from '../actions/types'

function updateLevelReducer(state=1, action) {
    switch (action.type) {
        case UPDATE_LEVEL:
            return action.level
        default:
            return state
    }
}

export default updateLevelReducer