declare function create(o: object | null): void

create({ name: 'jack' })
create(null)
// create(1) Error
