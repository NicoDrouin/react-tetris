import React, { StrictMode } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Entrance from './component/Entrance/Entrance'
import Tetris from './component/Tetris/Tetris/Tetris'


const App = ( { isEntranceClosed } ) => {

  let isTouch = (window.innerWidth * window.innerHeight) < 1024 * 768 ? true : false

  return (
    <StrictMode>
      <div className={'App' + (isTouch ? ' isTouch' : '')}>
        {
          isEntranceClosed
          ?
          <Tetris/>
          :
          <Entrance/>
        }
      </div>
    </StrictMode>
  )
}

const mapStateToProps = (state) => {
  return {
    isEntranceClosed: state.closeEntranceReducer
  }
}

App.propTypes = {
  isEntranceClosed: PropTypes.bool.isRequired
}

export default connect(
  mapStateToProps,
  undefined
)(App)