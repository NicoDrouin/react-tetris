import { CLOSE_ENTRANCE } from '../types'

export default function closeEntranceCreator(state) {
    return {
        type: CLOSE_ENTRANCE,
        state
    }
}