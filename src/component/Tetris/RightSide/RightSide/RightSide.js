import React from "react"
import './RightSide.scss';

import { connect } from 'react-redux'

import InGameData from '../InGameData/InGameData'
import NextShape from '../NextShape/NextShape'


const RightSide = ( { lines, level, score, nextShape } ) => {

  return (
      <div className='right-side side'>
        <InGameData
            lib = 'Lines'
            data = {lines}
        />
        <InGameData
            lib = 'Level'
            data = {level}
        />
        <InGameData
            lib = 'Score'
            data = {score}
        />
        <NextShape nextShape = {nextShape} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    lines: state.updateLinesReducer,
    level: state.updateLevelReducer,
    score: state.updateCurrentScoreReducer,
    nextShape: state.setNextShapeReducer
  }
}

export default connect(
  mapStateToProps,
  undefined
)(RightSide)