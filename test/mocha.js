var expect = chai.expect

function test() {
  it('should pass', function() {
    expect(true).to.equal(true)
  })
}

describe('test', function() {
  for (var n = 0; n < 100000; n++) {
    test()
  }
})
