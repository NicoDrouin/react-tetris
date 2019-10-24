import { wallKicksClassic, wallKicksI } from './wallKicksData'
import {
    setTableBoxsCurrent,
    tableBoxsStacked,
    currentShape,
    currentShapeAxis,
    currentShapeRotationState,
    currentShapeCoordinates,
    currentShapeWallKicksPosition
} from '../Playfield'

export function rotate() {
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