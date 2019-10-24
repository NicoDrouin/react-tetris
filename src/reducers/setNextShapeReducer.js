import { SET_NEXT_SHAPE } from '../actions/types'

function setNextShapeReducer(state='nothing', action) {
    switch (action.type) {
        case SET_NEXT_SHAPE:
            return action.nextShape
        default:
            return state
    }
}

export default setNextShapeReducer