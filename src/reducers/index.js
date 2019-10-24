import { combineReducers } from 'redux'

import closeEntranceReducer from './closeEntranceReducer'
import setNextShapeReducer from './setNextShapeReducer'
import updateLinesReducer from './updateLinesReducer'
import updateLevelReducer from './updateLevelReducer'
import updateCurrentScoreReducer from './updateCurrentScoreReducer'
import updateHighScoresReducer from './updateHighScoresReducer'
import setPopinReducer from './setPopinReducer'


const rootReducer = combineReducers({
    closeEntranceReducer,
    setNextShapeReducer,
    updateLinesReducer,
    updateLevelReducer,
    updateCurrentScoreReducer,
    updateHighScoresReducer,
    setPopinReducer
})


export default rootReducer