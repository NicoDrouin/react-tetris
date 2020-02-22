import React, { useState } from 'react'
import useInterval from '../../../../hooks/useInterval'
import './Countdown.scss'
import PropTypes from 'prop-types'


const Countdown = ( { startNewGame, setCountDownOver } ) => {

    const [playCountdown, setPlayCountdown] = useState(3)

    useInterval(() => {
        countdown()
        }, playCountdown >= 0 ? 1000 : null
    )

    function countdown() {
        if (playCountdown === 0) {
            setCountDownOver()
            startNewGame()
        }
        setPlayCountdown(playCountdown - 1)
    }

    return (
        <span className='countdown'>
            {
                playCountdown > 0 ? playCountdown :
                playCountdown === 0 ? 'PLAY !' :
                ''
            }
        </span>
    )
}

Countdown.propTypes = {
    startNewGame: PropTypes.func.isRequired,
    setCountDownOver: PropTypes.bool.isRequired
}

export default Countdown