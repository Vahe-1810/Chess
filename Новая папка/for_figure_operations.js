//cycle for white pawns Node
for(const pawn of whitePawns) {
    pawn.addEventListener('dragend', ev => {
        whitePawnGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), pawn) //x, y, p
    })
}
// //-----

// //cycle for black pawns Node
for(const pawn of blackPawns) {
    pawn.addEventListener('dragend', ev => {
        blackPawnGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), pawn) //x, y, p
    })
}
// for white castle walking
for(const wcsl of whiteCastles) {
    wcsl.addEventListener('dragend', ev => {
        CastlesGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), wcsl)
    })
}
// for black castle walking
for(const wcsl of blackCastles) {
    wcsl.addEventListener('dragend', ev => {
        CastlesGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), wcsl)
    })
}
// for white and black knights
for(const knight of whiteHorse) {
    knight.addEventListener('dragend', ev => {
        knightJump(Math.floor(ev.x / 50), Math.floor(ev.y / 50), knight)
    })
}
for(const knight of blackHorse) {
    knight.addEventListener('dragend', ev => {
        knightJump(Math.floor(ev.x / 50), Math.floor(ev.y / 50), knight)
    })
}
// for white and black bishops walking
for(const bshp of whiteElph) {
    bshp.addEventListener('dragend', ev => {
        bishopGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), bshp)
    })
}
for(const bshp of blackElph) {
    bshp.addEventListener('dragend', ev => {
        bishopGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), bshp)
    })
}
// for queens walking
whiteQueen.addEventListener('dragend', ev => {
    if(!bishopGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), whiteQueen)) {
        CastlesGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), whiteQueen)
    }
})
blackQueen.addEventListener('dragend', ev => {
    if(!bishopGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), blackQueen)) CastlesGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), blackQueen)
})
// for kings walking 
whiteKing.addEventListener('dragend', ev => {
    if(!kingGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), whiteKing)) forCastling(Math.floor(ev.x / 50), Math.floor(ev.y / 50), whiteKing)
})
blackKing.addEventListener('dragend', ev => {
    if(!kingGo(Math.floor(ev.x / 50), Math.floor(ev.y / 50), blackKing)) forCastling(Math.floor(ev.x / 50), Math.floor(ev.y / 50), blackKing)
})