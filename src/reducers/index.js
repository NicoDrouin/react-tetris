import { combineReducers } from 'redux'

import closeEntranceReducer from './closeEntranceReducer'
import setNextTetrominoReducer from './setNextTetrominoReducer'
import updateLinesReducer from './updateLinesReducer'
import updateLevelReducer from './updateLevelReducer'
import updateCurrentScoreReducer from './updateCurrentScoreReducer'
import updateHighScoresReducer from './updateHighScoresReducer'
import setPopinReducer from './setPopinReducer'


const rootReducer = combineReducers({
    closeEntranceReducer,
    setNextTetrominoReducer,
    updateLinesReducer,
    updateLevelReducer,
    updateCurrentScoreReducer,
    updateHighScoresReducer,
    setPopinReducer
})


export default rootReducer