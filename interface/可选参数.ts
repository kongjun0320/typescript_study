// interface SquareConfig {
//   color?: string
//   width?: number
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: 'black', area: 7 }
//   if (config.color) {
//     newSquare.color = config.color
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }

// console.log(createSquare({ color: 'yellow', width: 10 }))
// console.log(createSquare({ width: 10 }))
// console.log(createSquare({ color: 'yellow' }))

// interface SquareConfig {
//   color?: string
//   width?: number
//   [propName: string]: any
// }

interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'black', area: 7 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

const myObj = { colour: 'yellow', width: 10 }
console.log(createSquare(myObj))
