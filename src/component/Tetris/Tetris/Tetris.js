import React from 'react'
import './Tetris.scss';

import LeftSide from '../LeftSide/LeftSide/LeftSide'
import Playfield from '../Playfield/Playfield/Playfield'
import RightSide from '../RightSide/RightSide/RightSide'
import Popin from '../Popin/Popin'


function Tetris() {

  return (
    <div className='tetris-container'>
      <section className='tetris'>
        <LeftSide/>
        <Playfield/>
        <RightSide/>
        <Popin/>
      </section>
    </div>
  )
}

export default Tetris