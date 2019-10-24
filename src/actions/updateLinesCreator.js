import { UPDATE_LINES } from '../types'

export default function updateLinesCreator(lines) {
    return {
        type: UPDATE_LINES,
        lines
    }
}