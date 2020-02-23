import { SET_POPIN_STATE } from '../actions/types'

function setPopinReducer(state='noPopin', action) {
    switch (action.type) {
        case SET_POPIN_STATE:
            return action.popinState
        default:
            return state
    }
}

export default setPopinReducer