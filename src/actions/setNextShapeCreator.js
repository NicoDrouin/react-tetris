import { SET_NEXT_SHAPE } from '../types'

export default function setNextShapeCreator(nextShape) {
    return {
        type: SET_NEXT_SHAPE,
        nextShape
    }
}