import React, { StrictMode } from 'react'

import { connect } from 'react-redux'

import Entrance from './component/Entrance/Entrance'
import Tetris from './component/Tetris/Tetris/Tetris'


const App = ( { isEntranceClosed } ) => {

  let isTouch = (window.innerWidth * window.innerHeight) < 1024 * 768 ? true : false

  return (
    <StrictMode>
      <div className={isTouch ? 'App isTouch' : 'App'}>
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

export default connect(
  mapStateToProps,
  undefined
)(App)