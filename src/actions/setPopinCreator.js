import { SET_POPIN_STATE } from '../types'

export default function setPopinCreator(state) {
    return {
        type: SET_POPIN_STATE,
        state
    }
}