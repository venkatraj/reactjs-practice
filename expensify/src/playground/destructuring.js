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