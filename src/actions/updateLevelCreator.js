import { UPDATE_LEVEL } from '../types'

export default function updateLevelCreator(level) {
    return {
        type: UPDATE_LEVEL,
        level
    }
}