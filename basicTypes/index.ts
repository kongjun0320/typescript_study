// const names: String[] = ['jack', 'tom']
// console.log(names)

// function add(x: number, y: number) {
//   return x + y + ''
// }

// console.log(add(1, 2))

// function printName({
//   firstName,
//   lastName,
// }: {
//   firstName: String
//   lastName: String
// }): void {
//   console.log(firstName, lastName)
// }

// printName({ firstName: 'kong', lastName: 'jun' })

interface Person{
  firstName: string,
  lastName:string
}
function greeter(person:Person){
  console.log(`hello ${person.firstName} ${person.lastName}`)
}

greeter({firstName:'jun',lastName:'kong'})
