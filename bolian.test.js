const assert = require('assert')
const expect = require('chai').expect
const calc = require('./bolian')

describe('Basic functionality testing' ,() => {

    it('Two arrays of the same size [1 = 1]', () => {
        const actual = calc.is_equel(1, 1)
        const expected = true
        assert.strictEqual(expected , actual)
    }),

    it('Two arrays of the same size [52 = 52]', () => {
        const actual = calc.is_equel(52, 52)
        const expected = true
        assert.strictEqual(expected , actual)
    }),

    it('The two sets are different [1 = 5]', () => {
        const actual = calc.add(1, 5)
        const expected = false
        expect(expected).to.equal(actual)
    })

    it('The two sets are different ["" = 5]', () => {
        const actual = calc.add("", 5)
        const expected = new Error
        expect(expected).to.equal(actual)
    })

    it('The first number is greater than the second [1 > 1]', () => {
        const actual = calc.is_bigger(1, 1)
        const expected = true
        assert.strictEqual(expected , actual)
    }),
    it('A non-numeric parameter [1 > k]', () => {
        const actual = calc.is_bigger(1, k)
        const expected = err
        expect(expected).to.equal(actual)
    })





})