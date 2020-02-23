import { SET_NEXT_TETROMINO } from '../types'

export default function setNextTetrominoCreator(nextTetromino) {
    return {
        type: SET_NEXT_TETROMINO,
        nextTetromino
    }
}