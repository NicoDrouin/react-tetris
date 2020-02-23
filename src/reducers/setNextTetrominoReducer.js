import { SET_NEXT_TETROMINO } from '../actions/types'

function setNextTetrominoReducer(state='nothing', action) {
    switch (action.type) {
        case SET_NEXT_TETROMINO:
            return action.nextTetromino
        default:
            return state
    }
}

export default setNextTetrominoReducer