import React, { Fragment, useState, useEffect } from 'react'
import './Playfield.scss';

import { connect } from 'react-redux'

import Countdown from '../Countdown/Countdown'

import setNewShape from '../functions/setNewShape'
import { wallKicksClassic, wallKicksI } from '../functions/wallKicksData'

const initialBoxs =
    Array(264).fill(0).map((e, i) =>
        i % 12 === 0 || i % 12 === 11 ?
        'border' :
        'empty'
    )

export let tableBoxsCurrent = [...initialBoxs]
export let tableBoxsStacked = [...initialBoxs]

let currentShape = ''
let currentShapeAxis
let currentShapeRotationState
let currentShapeCoordinates = []
let currentShapeWallKicksPosition

let speed = 1000

let timerId

let gameIsPaused = false

let gameIsRunning = true


const Playfield = ( {
    setNextShapeCreator,
    nextShape,
    updateLinesCreator,
    updateLevelCreator,
    updateCurrentScoreCreator,
    lines,
    level,
    score,
    updateHighScoresCreator,
    setPopinCreator,
    popinState
} ) => {

    useEffect(() => {
        if (gameIsRunning && gameIsPaused && popinState === 'inactive') {
            togglePause()
        } else if (!gameIsPaused && popinState !== 'inactive') {
            togglePause()
        }
        if (!gameIsRunning && popinState === 'inactive') {
            startNewGame()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [popinState] )

    const [tableBoxs, setTableBoxs] = useState([...initialBoxs])


    function startNewGame() {
        tableBoxsCurrent = [...initialBoxs]
        tableBoxsStacked = [...initialBoxs]
        setTableBoxs([...initialBoxs])
        updateLinesCreator(0)
        updateLevelCreator(1)
        score = 0
        updateCurrentScoreCreator(score)
        speed = 1000
        gameIsRunning = true
        window.addEventListener('keydown', handleKeyPress)
        setNewShape(setNextShape)
        setNewShape(startNewCycle)
    }

    function tick() {
        moveShape(12, true)
    }

    function setNextShape(newNextShape) {
        setNextShapeCreator(newNextShape)
        nextShape = newNextShape
    }

    function startNewCycle(newCurrentShape) {
        currentShape = newCurrentShape
        currentShapeRotationState = 0
        setShapeCoordinatesAndAxis(currentShape)
        if (checkIfCanMove(currentShapeCoordinates, 0)) {
            setTableBoxsCurrent()
            timerId = setInterval(() => tick(), speed)
            window.addEventListener('keydown', handleKeyPress)
        } else {
            endGame()
        }
    }

    function setTableBoxsCurrent() {
        tableBoxsCurrent = [...tableBoxsStacked]
        for (let i = 0, len = currentShapeCoordinates.length; i < len; i++) {
            tableBoxsCurrent[currentShapeCoordinates[i]] = currentShape
        }
        setTableBoxs(tableBoxsCurrent);
    }

    function setShapeCoordinatesAndAxis(currentShape) {
        switch(currentShape) {
            case 'I':
                currentShapeCoordinates = [28, 29, 30, 31]
                currentShapeAxis = 1
                break
            case 'J':
                currentShapeCoordinates = [16, 28, 29, 30]
                currentShapeAxis = 2
                break
            case 'L':
                currentShapeCoordinates = [18, 28, 29, 30]
                currentShapeAxis = 2
                break
            case 'O':
                currentShapeCoordinates = [17, 18, 29, 30]
                break
            case 'S':
                currentShapeCoordinates = [17, 18, 28, 29]
                currentShapeAxis = 3
                break
            case 'T':
                currentShapeCoordinates = [17, 28, 29, 30]
                currentShapeAxis = 2
                break
            case 'Z':
                currentShapeCoordinates = [16, 17, 29, 30]
                currentShapeAxis = 2
                break
            default:
                // nope
        }
    }

    function checkIfCanMove(currentShapeNextPosition, direction, isTick) {
        const len = currentShapeNextPosition.length
        for (let i = 0; i < len; i++) {
            if (tableBoxsStacked[currentShapeNextPosition[i]] !== 'empty') {
                if (direction === 12) {
                    endCycle()
                }
                return false
            }
        }
        return true
    }

    function checkForFullLines() {
        let fullLines = []
        for (let i = 0; i < 22; i++) {
            let lineIsFull = true
            for (let j = 0; j < 12 && lineIsFull === true; j++) {
                if (tableBoxsStacked[(i * 12) + j] === 'empty') {
                    lineIsFull = false
                }
            }
            if (lineIsFull) {
                fullLines = [...fullLines, i]
            }
        }
        if (fullLines.length > 0) {
            removeFullLines(fullLines)
        }
    }

    function removeFullLines(fullLines) {
        const len = fullLines.length
        for (let i = 0; i < len; i++) {
            for (let pixelToRemove = (fullLines[i] * 12) + 11; pixelToRemove > -1; pixelToRemove--) {
                tableBoxsCurrent[pixelToRemove] = tableBoxsCurrent[pixelToRemove - 12]
            }
            for (let j = 0; j < 12; j++) {
                tableBoxsCurrent[j] = 
                    j % 12 === 0 || j % 12 === 11 ?
                    'border' :
                    'empty'
            }
        }
        incrementLines(len)
        incrementScore(len)
    }

    function incrementLines(linesRemoved) {
        lines += linesRemoved
        updateLinesCreator(lines)
        updateIntervalLevel()
    }

    function updateIntervalLevel() {
        level = Math.floor(lines / 10) + 1
        updateLevelCreator(level)
        level > 1 && updateSpeed()
    }

    function incrementScore(linesRemoved) {
        switch(linesRemoved) {
            case 1:
                score += 40 * level
                break
            case 2:
                score += 100 * level
                break
            case 3:
                score += 300 * level
                break
            case 4:
                score += 1200 * level
                break
            default:
                // nope
        }
    }

    function updateSpeed() {
        speed = ((0.8 - ((level - 1) * 0.007)) ** (level - 1)) * 1000
    }

    function handleKeyPress(event) {
        if (event.defaultPrevented) {
            return // Do nothing if the event was already processed
        }

        switch (event.key) {
            case 'Down': // IE/Edge specific value
            case 'ArrowDown':
                moveShape(12)
                break
            case 'Up': // IE/Edge specific value
            case 'ArrowUp':
                rotate()
                break
            case 'Left': // IE/Edge specific value
            case 'ArrowLeft':
                moveShape(-1)
                break
            case 'Right': // IE/Edge specific value
            case 'ArrowRight':
                moveShape(1)
                break
            case 'F1':
            case 'Escape':
            case 'p':
                togglePause()
                break
            default:
                return // Quit when this doesn't handle the key event.
        }

        // Cancel the default action to avoid it being handled twice
        event.preventDefault()
    }

    const moveShape = (direction, isTick) => {
        let currentShapeNextPosition = []
        for (let i = 0, len = currentShapeCoordinates.length; i < len; i++) {
            currentShapeNextPosition = [...currentShapeNextPosition, currentShapeCoordinates[i] + direction]
        }
        const canMove = checkIfCanMove(currentShapeNextPosition, direction, isTick)
        if (canMove) {
            if (direction === 12 && !isTick) {
                clearInterval(timerId)
                timerId = setInterval(() => tick(), speed)
                score += 1
                updateCurrentScoreCreator(score)
            }
            currentShapeCoordinates = currentShapeNextPosition
            setTableBoxsCurrent()
        }
    }

    function rotate() {
        if (currentShape !== 'O') {
            const currentShapeLength = currentShapeCoordinates.length
            const currentShapeAxisPosition = currentShapeCoordinates[currentShapeAxis]
            const currentShapeAxisHorizontalPosition = currentShapeAxisPosition % 12
            const currentShapeAxisVerticalPosition = Math.floor(currentShapeAxisPosition / 12)
            let currentShapeNextPosition = []
            for (let i = 0; i < currentShapeLength; i++) {
                let boxPosition = currentShapeCoordinates[i]
                let boxHorizontalPosition = boxPosition % 12
                let boxVerticalPosition = Math.floor(boxPosition / 12)
                let boxDisplacement =
                    ((currentShapeAxisHorizontalPosition - boxHorizontalPosition) * -11) +
                    ((currentShapeAxisVerticalPosition - boxVerticalPosition) * 13)
                currentShapeRotationState = currentShapeRotationState % 4
                if (currentShape === 'I') {
                    if (currentShapeRotationState === 0) {
                        boxDisplacement++
                    } else if (currentShapeRotationState === 1) {
                        boxDisplacement += 12
                    } else if (currentShapeRotationState === 2) {
                        boxDisplacement--
                    } else if (currentShapeRotationState === 3) {
                        boxDisplacement -= 12
                    }
                }
                let boxPositionAfterRotation = boxPosition + boxDisplacement
                currentShapeNextPosition = [...currentShapeNextPosition, boxPositionAfterRotation]
            }
            if (checkIfCanRotate(currentShapeNextPosition)) {
                currentShapeCoordinates = currentShapeWallKicksPosition
                currentShapeRotationState++
                setTableBoxsCurrent()
            }
        }
    }

    function checkIfCanRotate(currentShapeNextPosition) {
        const len = currentShapeNextPosition.length
        let canRotate
        let wallKicks
        currentShape !== 'I' ? wallKicks = wallKicksClassic : wallKicks = wallKicksI
            for (let wallKicksTest = 0; wallKicksTest < 5; wallKicksTest++) {
                canRotate = true
                currentShapeWallKicksPosition = []
                const wallKickVariationPosition = wallKicks[currentShapeRotationState][wallKicksTest]
                for (let i = 0; i < len; i++) {
                    currentShapeWallKicksPosition[i] = currentShapeNextPosition[i] + wallKickVariationPosition
                    if (tableBoxsStacked[currentShapeWallKicksPosition[i]] !== 'empty') {
                        canRotate = false
                        break
                    }
                }
                if (canRotate === true) {
                    return true
                }
            }
        return false
    }

    function endCycle() {
        tableBoxsStacked = tableBoxsCurrent
        checkForFullLines()
        cleanIntervalAndEvent()
        setShapeCoordinatesAndAxis(nextShape)
        startNewCycle(nextShape)
        setNewShape(setNextShape)
    }

    function endGame() {
        gameIsRunning = false
        cleanIntervalAndEvent()
        if (score > 0) {
            updateHighScoresCreator(score)
        }
        document.documentElement.classList.add('popin-is-open');
        setPopinCreator()
    }

    function cleanIntervalAndEvent() {
        clearInterval(timerId)
        window.removeEventListener('keydown', handleKeyPress)
    }

    function togglePause() {
        gameIsPaused ? timerId = setInterval(() => tick(), speed) : clearInterval(timerId)
        gameIsPaused = !gameIsPaused
    }


    return (
        <Fragment>
            <div className='playfield-container'>
                <div className='playfield'>
                    <Countdown startNewGame = {startNewGame}/>
                    {tableBoxs.map((box, i) =>
                        i % 12 === 11 ?
                        <Fragment key={i}><div className={tableBoxs[i]}></div><br/></Fragment> :
                        <div key={i} className={tableBoxs[i]}></div>
                    )}
                </div>
            </div>
            <div className='control'>
                <div className='top'>
                    <button onClick={() => moveShape(-1)}>l</button>
                    <button onClick={() => rotate()}>t</button>
                    <button onClick={() => moveShape(1)}>r</button>
                </div>
                <div className='bottom'>
                    <button onClick={() => moveShape(12)}>bottom</button>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
  return {
    nextShape: state.setNextShapeReducer,
    lines: state.updateLinesReducer,
    level: state.updateLevelReducer,
    score: state.updateCurrentScoreReducer,
    popinState: state.setPopinReducer
  }
}

const mapDispatchToProps = dispatch => {
    return {
        setNextShapeCreator: (nextShape) => dispatch({ type: 'SET_NEXT_SHAPE', nextShape }),
        updateLinesCreator: (lines) => dispatch({ type: 'UPDATE_LINES', lines }),
        updateLevelCreator: (level) => dispatch({ type: 'UPDATE_LEVEL', level }),
        updateCurrentScoreCreator: (score) => dispatch({ type: 'UPDATE_CURRENT_SCORE', score }),
        updateHighScoresCreator: (score) => dispatch({ type: 'UPDATE_HIGH_SCORES', newScore: score }),
        setPopinCreator: () => dispatch({ type: 'SET_POPIN_STATE', popinState: 'gameOver' })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playfield)