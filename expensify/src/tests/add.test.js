const add = (a, b) => a + b
const sayHello = (name = 'Guest') => `Hello, ${name}!`

test('Should add two numbers', () => {
  const result = add(4,3)
  expect(result).toBe(7)
})

test('Should say hello to given name', () => {
  const result = sayHello('Venkat')
  expect(result).toBe('Hello, Venkat!')
})

test('Should say hello to guest', () => {
  const result = sayHello()
  expect(result).toBe('Hello, Guest!')
})