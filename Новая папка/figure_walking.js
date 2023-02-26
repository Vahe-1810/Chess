let blackCastling = true // for black castling
let whiteCastling = true // for black castling
//falsewhite pawn walking
function whitePawnGo(x, y, p) {
    let i = p.y / 50
    let j = p.x / 50
    if(Math.abs(j - x) == 1 && i - y == 1) {
        if(Array.from(matrix[y][x].childNodes).length){
            if (Array.from(matrix[y][x].childNodes[0].classList).includes('bfigure') && Array.from(p.classList).includes('bfigure')) return
            if (Array.from(matrix[y][x].childNodes[0].classList).includes("wfigure") && Array.from(p.classList).includes("wfigure")) return
        }
        matrix[y][x].appendChild(p)
        if (Array.from(matrix[y][x].childNodes[0].classList).includes("wfigure") && Array.from(p.classList).includes('bfigure')) matrix[y][x].childNodes[0].remove()
        if (Array.from(matrix[y][x].childNodes[0].classList).includes('bfigure') && Array.from(p.classList).includes("wfigure")) matrix[y][x].childNodes[0].remove()
        return
    }
    if(j - x) return
    if(i === 6 && i - y > 2 || i - y < 0) return
    if(i !== 6 && i - y > 1) return
    if(matrix[y][x].childNodes.length) return
    if(i - y == 2 && matrix[y+1][x].childNodes.length) return
    matrix[y][x].appendChild(p)
}

// // black pawn walking
function blackPawnGo(x, y, p) {
    let i = p.y / 50
    let j = p.x / 50
    if(j - x) return
    if(i === 1 && y - i > 2 || i - y > 0) return
    if(i !== 1 && y - i > 1) return
    if(matrix[y][x].childNodes.length) return
    if(y - i == 2 && matrix[y-1][x].childNodes.length) return
    matrix[y][x].appendChild(p)
}

// castles walking
function CastlesGo(x, y, csl) {
    let x1 = Math.floor(csl.x / 50)
    let y1 = Math.floor(csl.y / 50)
    if(Array.from(matrix[y][x].childNodes).length){
        if (Array.from(matrix[y][x].childNodes[0].classList).includes('bfigure') && Array.from(csl.classList).includes('bfigure')) return
        if (Array.from(matrix[y][x].childNodes[0].classList).includes("wfigure") && Array.from(csl.classList).includes("wfigure")) return
    }
    if(x > 7 || y > 7) return
    if(x1 - x == 0) {
        if(y1 - y > 0) {
            for(let i = (y1-1); i > y; i--) {
                if(matrix[i][x].childNodes.length) return
            }
            matrix[y][x].appendChild(csl)
        } else {
            for (let i = y1+1; i < y; i++) {
                if (matrix[i][x].childNodes.length) return
            }
            matrix[y][x].appendChild(csl)
        }
    } else if(y1 - y == 0){
        if(x1 - x > 0) {
            for(let i = (x1-1); i > x; i--) {
                if(matrix[y][i].childNodes.length) return
            }
            matrix[y][x].appendChild(csl)
        } else {
            for(let i = x1+1; i < x; i++) {
                if(matrix[y][i].childNodes.length) return
            }
            matrix[y][x].appendChild(csl)
        }
    }
    if (Array.from(matrix[y][x].childNodes[0].classList).includes("wfigure") && Array.from(csl.classList).includes('bfigure')) matrix[y][x].childNodes[0].remove()
    if (Array.from(matrix[y][x].childNodes[0].classList).includes('bfigure') && Array.from(csl.classList).includes("wfigure")) matrix[y][x].childNodes[0].remove()
    
    if(!Array.from(csl.classList).includes('c')) return
    if(!Array.from(csl.classList).includes('castle')) {
        whiteCastling = false
    } else if(!Array.from(csl.classList).includes('blackCastle')) {
        blackCastling = false
    }
}

// knights walking
function knightJump (x, y, kgt) {
    let x1 = Math.floor(kgt.x / 50) 
    let y1 = Math.floor(kgt.y / 50)
    if(x > 7 || y > 7) return
    if(Array.from(matrix[y][x].childNodes).length){
        if (Array.from(matrix[y][x].childNodes[0].classList).includes('bfigure') && Array.from(kgt.classList).includes('bfigure')) return
        if (Array.from(matrix[y][x].childNodes[0].classList).includes("wfigure") && Array.from(kgt.classList).includes("wfigure")) return
    }
    if (Math.abs(x1 - x) === 2 && Math.abs(y1 - y) === 1 || Math.abs(x1 - x) === 1 && Math.abs(y1 - y) === 2) {matrix[y][x].appendChild(kgt)}else return
    if (Array.from(matrix[y][x].childNodes[0].classList).includes("wfigure") && Array.from(kgt.classList).includes('bfigure')) matrix[y][x].childNodes[0].remove()
    if (Array.from(matrix[y][x].childNodes[0].classList).includes('bfigure') && Array.from(kgt.classList).includes("wfigure")) matrix[y][x].childNodes[0].remove()

}

// bishop walking
function bishopGo(x, y, bshp) {
    let x1 = Math.floor(bshp.x / 50)
    let y1 = Math.floor(bshp.y / 50)

    if(Math.abs(x1 - x) == Math.abs(y1 - y)) {
        if(Array.from(matrix[y][x].childNodes).length){
            if (Array.from(matrix[y][x].childNodes[0].classList).includes('bfigure') && Array.from(bshp.classList).includes('bfigure')) return
            if (Array.from(matrix[y][x].childNodes[0].classList).includes("wfigure") && Array.from(bshp.classList).includes("wfigure")) return
        }
        if(x1 - x > 0 && y1 - y > 0) {
            for(let i = 1; i < Math.abs(x1 - x); i++) {
                if(matrix[y1-i][x1-i].childNodes.length) return
            }
            matrix[y][x].appendChild(bshp)
        } else if(x1 - x < 0 && y1 - y < 0) {
            for(let i = 1; i < Math.abs(x1 - x); i++) {
                if(matrix[y1+i][x1+i].childNodes.length) return
            }
            matrix[y][x].appendChild(bshp)
        } else if(x1 - x < 0 && y1 - y > 0) {
            for(let i = 1; i < Math.abs(x1 - x); i++) {
                if(matrix[y1-i][x1+i].childNodes.length) return
            }
            matrix[y][x].appendChild(bshp)
        } else {
            for(let i = 1; i < Math.abs(x1 - x); i++) {
                if(matrix[y1+i][x1-i].childNodes.length) return
            }
            matrix[y][x].appendChild(bshp)
        }    
        if (Array.from(matrix[y][x].childNodes[0].classList).includes("wfigure") && Array.from(bshp.classList).includes('bfigure')) matrix[y][x].childNodes[0].remove()
        if (Array.from(matrix[y][x].childNodes[0].classList).includes('bfigure') && Array.from(bshp.classList).includes("wfigure")) matrix[y][x].childNodes[0].remove()    
    }
}
// king walking
function kingGo(x, y, king) {
    let x1 = Math.floor((king.x+4)/ 50)
    let y1 = Math.floor((king.y+3) / 50)

    if(matrix[y][x].childNodes.length) return null
    if(x1 - x > 1 || x1 - x < -1 && y1 - y > 1 || y1 - y < -1) return
    if(Math.abs(x1 - x) <= 1 && Math.abs(y1 - y) <= 1) {
        matrix[y][x].appendChild(king)
        if(Array.from(king.classList).includes('king')) whiteCastling = false
        if(Array.from(king.classList).includes('blkking')) blackCastling = false
        // castling = false
    } else return
}
// for castling
function forCastling(x, y, king) {
    if(!whiteCastling && Array.from(king.classList).includes('king')) return
    if(!blackCastling && Array.from(king.classList).includes('blkking')) return
    
    let x1 = Math.floor((king.x+4)/ 50)
    let y1 = Math.floor((king.y+3) / 50)
    if(matrix[y][x].childNodes.length) return
    if(y1 == 7 && y == 7) {
        if(x == 6) {
            if(matrix[y][x-1].childNodes.length) return
            matrix[y][x].appendChild(king)
            matrix[y][x-1].appendChild(whiteCastles[1])
            if(Array.from(king.classList).includes('king')) whiteCastling = false
            if(Array.from(king.classList).includes('blkking')) blackCastling = false
        } else if(x == 2) {
            if(matrix[y][x+1].childNodes.length) return
            if(matrix[y][x-1].childNodes.length) return
            matrix[y][x].appendChild(king)
            matrix[y][x+1].appendChild(whiteCastles[0])
            if(Array.from(king.classList).includes('king')) whiteCastling = false
            if(Array.from(king.classList).includes('blkking')) blackCastling = false
        }
    } else if(y1 == 0 && y == 0) {
        console.log(matrix[y][x-1]);
        if(x == 6) {
            if(matrix[y][x-1].childNodes.length) return
            matrix[y][x].appendChild(king)
            matrix[y][x-1].appendChild(blackCastles[1])
            if(Array.from(king.classList).includes('king')) whiteCastling = false
            if(Array.from(king.classList).includes('blkking')) blackCastling = false
        } else if(x == 2) {
            if(matrix[y][x+1].childNodes.length) return
            if(matrix[y][x-1].childNodes.length) return
            matrix[y][x].appendChild(king)
            matrix[y][x+1].appendChild(blackCastles[0])
            if(Array.from(king.classList).includes('king')) whiteCastling = false
            if(Array.from(king.classList).includes('blkking')) blackCastling = false
        }
    }
}
// Array.from(matrix[y][x].childNodes[0].classList).includes('bfigure')