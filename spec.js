function test() {
  it('should pass', function() {
    expect(true).toBe(true)
  })
}

describe('test', function() {
  for (var n = 0; n < 100000; n++) {
    test()
  }
  afterEach(function() {
    window = null
  })
})
