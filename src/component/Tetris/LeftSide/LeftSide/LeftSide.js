import React from 'react'
import './LeftSide.scss';

import Music from '../Music/Music'
import HighScores from '../HighScores/HighScores'
import About from '../About/About'


function LeftSide() {

    return (
        <section className='left-side side'>
            <div className='top'>
                <Music/>
                <HighScores/>
            </div>
            <div className='bottom'>
                <About/>
            </div>
        </section>
    )
}

export default LeftSide