describe('function bookStore ', function () {
  it('should exist', function () {
    expect(bookStore).toBeDefined()
  })

  it('should be a function', function () {
    expect(typeof bookStore).toBe('function')
  })

  it('should return a number', function () {
    var result = bookStore([])
    expect(typeof result).toBe('number')
  })
  describe('should apply the same price for ALL different books (8€ per book)', function () {
    it('final price of 24 when bookStore(["book1", "book2", "book3"])', function () {
      var books = ['book1', 'book2', 'book3']
      var result = bookStore(books)
      var expectedResult = 24
      expect(result).toBe(expectedResult)
    })
    it('final price of 40 when bookStore(["book1", "book2", "book3", "book4", "book5"])', function () {
      var books = ['book1', 'book2', 'book3', 'book4', 'book5']
      var result = bookStore(books)
      var expectedResult = 40
      expect(result).toBe(expectedResult)
    })
  })

  describe('should apply a discount of 5% when 2 books are repeated', function () {
    it('final price of 23.2 when bookStore(["book1", "book1", "book3"])', function () {
      var books = ['book1', 'book1', 'book3']
      var result = bookStore(books)
      var expectedResult = 23.2
      expect(result).toBe(expectedResult)
    })
  })
})
