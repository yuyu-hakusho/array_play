const getVowels = require("../1")

describe("Exercise 1", () => {
  it("transforms the alphabet into an array of vowels", () => {
    expect(getVowels()).toEqual(["a", "e", "i", "o", "u", "y"])
  })
})
