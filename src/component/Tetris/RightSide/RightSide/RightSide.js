import React from "react"
import PropTypes from 'prop-types'
import './RightSide.scss'

import { connect } from 'react-redux'

import InGameData from '../InGameData/InGameData'
import NextTetromino from '../NextTetromino/NextTetromino'


const RightSide = ( { lines, level, score, nextTetromino } ) => {

  return (
      <section className='right-side side'>
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
        <NextTetromino nextTetromino = {nextTetromino} />
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    lines: state.updateLinesReducer,
    level: state.updateLevelReducer,
    score: state.updateCurrentScoreReducer,
    nextTetromino: state.setNextTetrominoReducer
  }
}

RightSide.propTypes = {
  lines: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  nextTetromino: PropTypes.string.isRequired
}

export default connect(
  mapStateToProps,
  undefined
)(RightSide)