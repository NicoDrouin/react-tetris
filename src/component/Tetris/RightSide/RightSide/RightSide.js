import React from "react"
import PropTypes from 'prop-types'
import './RightSide.scss'

import { connect } from 'react-redux'

import InGameData from '../InGameData/InGameData'
import NextShape from '../NextShape/NextShape'


const RightSide = ( { lines, level, score, nextShape } ) => {

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
        <NextShape nextShape = {nextShape} />
    </section>
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

RightSide.propTypes = {
  lines: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  nextShape: PropTypes.string.isRequired
}

export default connect(
  mapStateToProps,
  undefined
)(RightSide)