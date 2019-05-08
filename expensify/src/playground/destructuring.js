const person = {
  name: 'Venkat',
  age: 45,
  location: {
    city: 'Salem',
    temp: 100
  }
}

const { name: firstName = 'Anonymous', age } = person
console.log(`${firstName} is ${age} years old.`)

const { city, temp: temparature } = person.location
console.log(`It's ${temparature} in ${city}`)

const book = {
  title: 'The Obstacle is the Way',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName)

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, myCity, state] = address
console.log(`You are in ${myCity}, ${state}`)

const item = ['Coffee (ice)', '$2.00', '$2.50', '$2.75']
const [name, ,medium] = item
console.log(`A ${name} costs ${medium}`)