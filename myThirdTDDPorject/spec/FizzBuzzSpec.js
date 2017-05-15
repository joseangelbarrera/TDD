describe('function fizzBuzz ', function () {
  it('should exist', function () {
    expect(fizzBuzz).toBeDefined()
  })

  it('should be a function', function () {
    expect(typeof fizzBuzz).toBe('function')
  })

  it('should return an Array', function () {
    var result = fizzBuzz()
    expect(typeof result).toBe('object')
  })

describe('should return an 100 elements array', function () {
  it('should return a list of 100 numbers', function() {
    var result = fizzBuzz()
  expect(result.length).toBe(100)
  })

  describe('depending their position the array element could be a number or a string', function () {

  it('should return Fizz in the 3rd postion', function () {
    var result = fizzBuzz()
    expect(result[2]).toBe('Fizz')
  })

  it('should return Buzz in the 5th postion', function () {
    var result = fizzBuzz()
    expect(result[4]).toBe('Buzz')
  })

 it('should return Buzz in the 15th postion', function () {
    var result = fizzBuzz()
    expect(result[14]).toBe('FizzBuzz')
  })

 it('should return Buzz in the 1st postion', function () {
    var result = fizzBuzz()
    expect(result[0]).toBe(1)
  })
  })
})


  // it('should return "drink toddy" when peopleWithAgeDrink(13)', function () {
  //   var result = drinkBeer(13)
  //   expect(result).toBe('drink toddy')
  // })

  // it('should return "drink coke" when peopleWithAgeDrink(17)', function () {
  //   var result = drinkBeer(17)
  //   expect(result).toBe('drink coke')
  // })

  // it('should return "drink beer" when peopleWithAgeDrink(18)', function () {
  //   var result = drinkBeer(18)
  //   expect(result).toBe('drink beer')
  // })

  // it('should return "drink whisky" when peopleWithAgeDrink(30)', function () {
  //   var result = drinkBeer(30)
  //   expect(result).toBe('drink whisky')
  // })
})
