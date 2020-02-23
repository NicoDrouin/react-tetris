import { wallKicksClassic, wallKicksI } from './wallKicksData'
import {
    setTableBoxsCurrent,
    tableBoxsStacked,
    currentTetromino,
    currentTetrominoAxis,
    currentTetrominoRotationState,
    currentTetrominoCoordinates,
    currentTetrominoWallKicksPosition
} from '../Playfield'

export function rotate() {
    if (currentTetromino !== 'O') {
        const currentTetrominoLength = currentTetrominoCoordinates.length
        const currentTetrominoAxisPosition = currentTetrominoCoordinates[currentTetrominoAxis]
        const currentTetrominoAxisHorizontalPosition = currentTetrominoAxisPosition % 12
        const currentTetrominoAxisVerticalPosition = Math.floor(currentTetrominoAxisPosition / 12)
        let currentTetrominoNextPosition = []
        for (let i = 0; i < currentTetrominoLength; i++) {
            let boxPosition = currentTetrominoCoordinates[i]
            let boxHorizontalPosition = boxPosition % 12
            let boxVerticalPosition = Math.floor(boxPosition / 12)
            let boxDisplacement =
                ((currentTetrominoAxisHorizontalPosition - boxHorizontalPosition) * -11) +
                ((currentTetrominoAxisVerticalPosition - boxVerticalPosition) * 13)
            currentTetrominoRotationState = currentTetrominoRotationState % 4
            if (currentTetromino === 'I') {
                if (currentTetrominoRotationState === 0) {
                    boxDisplacement++
                } else if (currentTetrominoRotationState === 1) {
                    boxDisplacement += 12
                } else if (currentTetrominoRotationState === 2) {
                    boxDisplacement--
                } else if (currentTetrominoRotationState === 3) {
                    boxDisplacement -= 12
                }
            }
            let boxPositionAfterRotation = boxPosition + boxDisplacement
            currentTetrominoNextPosition = [...currentTetrominoNextPosition, boxPositionAfterRotation]
        }
        if (checkIfCanRotate(currentTetrominoNextPosition)) {
            currentTetrominoCoordinates = currentTetrominoWallKicksPosition
            currentTetrominoRotationState++
            setTableBoxsCurrent()
        }
    }
}

function checkIfCanRotate(currentTetrominoNextPosition) {
    const len = currentTetrominoNextPosition.length
    let canRotate
    let wallKicks
    currentTetromino !== 'I' ? wallKicks = wallKicksClassic : wallKicks = wallKicksI
        for (let wallKicksTest = 0; wallKicksTest < 5; wallKicksTest++) {
            canRotate = true
            currentTetrominoWallKicksPosition = []
            const wallKickVariationPosition = wallKicks[currentTetrominoRotationState][wallKicksTest]
            for (let i = 0; i < len; i++) {
                currentTetrominoWallKicksPosition[i] = currentTetrominoNextPosition[i] + wallKickVariationPosition
                if (tableBoxsStacked[currentTetrominoWallKicksPosition[i]] !== 'empty') {
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