import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Countdown.scss'

let timerCountdown
let timerCountDownIsActive = false
let playCountdownValue = 3

const Countdown = ( { startNewGame, setCountDownOver } ) => {

    timerCountdown = !timerCountDownIsActive && setInterval(() => countdown(), 1000)

    const [playCountdown, setPlayCountdown] = useState(3)

    function countdown() {
        if (playCountdownValue > 1) {
            playCountdownValue--
            timerCountDownIsActive = true
        } else if (playCountdownValue === 1) {
            playCountdownValue = 'PLAY !'
        } else if (playCountdownValue === 'PLAY !') {
            playCountdownValue = ''
            clearInterval(timerCountdown)
            setCountDownOver()
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

Countdown.propTypes = {
    startNewGame: PropTypes.func.isRequired,
    setCountDownOver: PropTypes.bool.isRequired
}

export default Countdown