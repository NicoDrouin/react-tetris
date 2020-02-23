let newTetromino = ''

function setNewTetromino(callback) {
    const randomTetromino = Math.ceil(Math.random() * (7))
    switch(randomTetromino) {
        case 1:
            newTetromino = 'I'
            break
        case 2:
            newTetromino = 'J'
            break
        case 3:
            newTetromino = 'L'
            break
        case 4:
            newTetromino = 'O'
            break
        case 5:
            newTetromino = 'S'
            break
        case 6:
            newTetromino = 'T'
            break
        case 7:
            newTetromino = 'Z'
            break
        default:
            // nope
    }
    callback(newTetromino)
}

export default setNewTetromino