import { UPDATE_HIGH_SCORES } from '../types'

export default function updateHighScoresCreator(newScore) {
    return {
        type: UPDATE_HIGH_SCORES,
        newScore
    }
}