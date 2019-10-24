let newShape = ''

function setNewShape(callback) {
    const randomShape = Math.ceil(Math.random() * (7))
    switch(randomShape) {
        case 1:
            newShape = 'I'
            break
        case 2:
            newShape = 'J'
            break
        case 3:
            newShape = 'L'
            break
        case 4:
            newShape = 'O'
            break
        case 5:
            newShape = 'S'
            break
        case 6:
            newShape = 'T'
            break
        case 7:
            newShape = 'Z'
            break
        default:
            // nope
    }
    callback(newShape)
}

export default setNewShape