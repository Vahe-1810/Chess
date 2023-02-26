//Basic works... creating table and figures.

(function chessTable() {
    let chess = document.querySelector('.chess')

    chess.before()
    let cur = 1;

    for(let i = 0; i < 8; i++) {
        
        for (let j = 0; j < 8; j++) {

            if (cur % 2) {
                chess.innerHTML += '<div class="block"></div>'
            } else {
                chess.innerHTML += '<div class="block" style="background-Color: #808080"></div>'
            }
            cur++
        }
        cur++
    }
})() // function for creating table (cubes)

// white figures
const cube = document.querySelectorAll('.block') // Node list from divs (cubes)
const arrFromCube = Array.from(cube)
const matrix = [[], [], [], [], [], [], [], []]

for(let i = 0, j = 0; i < 64; i++) {
    if(!(i % 8) && i !== 0) {
        j++
    }
    matrix[j].push(arrFromCube[i])
}
console.log(matrix);
let whiteCastles = document.getElementsByClassName('castle')
let whitePawns = document.getElementsByClassName('pawn')
let whiteHorse = document.getElementsByClassName('horse')
let whiteElph = document.getElementsByClassName('elph')
let whiteKing = document.getElementById('king')
let whiteQueen = document.getElementById('queen')

// white figures

let blackPawns = document.getElementsByClassName('blkpawn')
let blackCastles = document.getElementsByClassName('blkcastle')
let blackHorse = document.getElementsByClassName('blkhorse')
let blackElph = document.getElementsByClassName('blkelph')
let blackKing = document.getElementById('blkking')
let blackQueen = document.getElementById('blkqueen')

function disposition() {

    for(let i = 0, j = 48; i < 8; i++, j++) {
        cube[j].appendChild(whitePawns[i])
    }
    
    for(let i = 0, j = 8; i < 8; i++, j++) {
        cube[j].appendChild(blackPawns[i])
    }
    
    cube[56].appendChild(whiteCastles[0])
    cube[63].appendChild(whiteCastles[1])

    cube[58].appendChild(whiteElph[0])
    cube[61].appendChild(whiteElph[1])

    cube[57].appendChild(whiteHorse[0])
    cube[62].appendChild(whiteHorse[1])

    cube[60].appendChild(whiteKing)
    cube[59].appendChild(whiteQueen)

    cube[0].appendChild(blackCastles[0])
    cube[7].appendChild(blackCastles[1])

    cube[2].appendChild(blackElph[0])
    cube[5].appendChild(blackElph[1])

    cube[1].appendChild(blackHorse[0])
    cube[6].appendChild(blackHorse[1])

    cube[4].appendChild(blackKing)
    cube[3].appendChild(blackQueen)

    document.querySelector('button').style.display = 'none';
} // function for dusposition all figures
disposition()