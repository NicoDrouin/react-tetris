import React from 'react'
import PropTypes from 'prop-types'
import './Controls.scss'

let timerMoveOnHoldTouchControl

const Controls = ( { gameIsRunning, gameIsPaused, moveShape, rotate } ) => {

    const moveOnHoldDownSpeed = 80
    const moveOnHoldSideSpeed = 160

    function moveOnTouchControl(direction, speed) {
        if (gameIsRunning && !gameIsPaused) {
            moveShape(direction)
            timerMoveOnHoldTouchControl = window.setInterval(() => moveShape(direction), speed)
        }
    }

    function stopMoveOnTouchControl() {
        clearInterval(timerMoveOnHoldTouchControl)
        timerMoveOnHoldTouchControl = 0
    }

    return (
        <section className='control'>
            <div className='top'>
                <button
                    onTouchStart={() => moveOnTouchControl(-1, moveOnHoldSideSpeed)}
                    onTouchEnd={() => stopMoveOnTouchControl()}
                    className='arrow-left'
                ></button>
                <button onClick={() => rotate()} className='rotate'></button>
                <button
                    onTouchStart={() => moveOnTouchControl(1, moveOnHoldSideSpeed)}
                    onTouchEnd={() => stopMoveOnTouchControl()}
                    className='arrow-right'
                ></button>
            </div>
            <div className='down'>
                <button
                    onTouchStart={() => moveOnTouchControl(12, moveOnHoldDownSpeed)}
                    onTouchEnd={() => stopMoveOnTouchControl()}
                    className='arrow-down'
                ></button>
            </div>
        </section>
    )
}

Controls.propTypes = {
    gameIsRunning: PropTypes.bool.isRequired,
    gameIsPaused: PropTypes.bool.isRequired,
    moveShape: PropTypes.func.isRequired,
    rotate: PropTypes.func.isRequired
}

export default Controls