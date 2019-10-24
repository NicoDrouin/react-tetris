import React, { useState, useEffect } from 'react'
import './Countdown.scss';

const Countdown = ( { startNewGame } ) => {

    let timerCountdown
    let playCountdownValue = 3

    useEffect(() => {
        popinPlayCountdown()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    const [playCountdown, setPlayCountdown] = useState(3)

    function popinPlayCountdown() {
        timerCountdown = setInterval(() => countdown(), 1000)
    }

    function countdown() {
        if (playCountdownValue > 1) {
            playCountdownValue = playCountdownValue - 1
        } else if (playCountdownValue === 1) {
            playCountdownValue = 'PLAY !'
        } else if (playCountdownValue === 'PLAY !') {
            playCountdownValue = ''
            clearInterval(timerCountdown)
            startNewGame()
        }
        setPlayCountdown(playCountdownValue)
    }

    return (
        <span className='countdown'>
            {playCountdown}
        </span>
    )
}

export default Countdown