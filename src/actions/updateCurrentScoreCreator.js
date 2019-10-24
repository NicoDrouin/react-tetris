import { UPDATE_CURRENT_SCORE } from '../types'

export default function updateCurrentScoreCreator(score) {
    return {
        type: UPDATE_CURRENT_SCORE,
        score
    }
}