interface SearchFunc {
  (source: string, subString: string): boolean
}
// let mySearch: SearchFunc = (source: string, subString: string) =>
//   source.search(subString) > -1

let mySearch: SearchFunc = (source, subString) => source.search(subString) > -1
