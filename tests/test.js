import 'mocha';
import chai from 'chai';

const { expect } = chai;

describe('Print-odd-even function', () => {
  describe('for invalid input types', () => {
    it('should return invalid input notification for string type', () => {
      expect(printOddEven('abc')).to.be.a('string');
      expect(printOddEven('abc')).to.equal(`Input must be of type number
      or array`);
    });
    it('should return invalid input notification for object type', () => {
      expect(printOddEven({ foo: 'bar' })).to.be.a('string');
      expect(printOddEven({ foo: 'bar' })).to.equal(`Input must be of type
      number or array`);
    });
  });
  describe('for invalid input values', () => {
    it(`should return error message for negative number
        inputs`, () => {
        expect(printOddEven(-35)).to.be.a('string');
        expect(printOddEven(-35)).to.equal('Number must not be less than 0');
      });
    it('should return "Empty array" for an empty array input', () => {
      expect(printOddEven([])).to.be.a('string');
      expect(printOddEven([])).to.equal('Empty array');
    });
  });
  describe('for valid inputs', () => {
    it(`should return an object with keys "odd" and "even" and values [1, 3, 5]
        and [0, 2, 4] arrays respectively when the input is 5`, () => {
        expect(printOddEven(5)).to.be.an('object').that.has.all
          .keys('even', 'odd');
        expect(printOddEven(5)).to.have.property('even').that.is.an('array');
        expect(printOddEven(5)).to.have.property('odd').that.is.an('array');
        expect(printOddEven(5)).to.be.an('object').that.includes({
          even: [0, 2, 4],
          odd: [1, 3, 5],
        });
      });
    it(`should return an object with keys "odd" and "even" and values
        "[1, 3, 5, 7]" and "[0, 2, 4, 6, 8]" respectively when the input
        is 8`, () => {
        expect(printOddEven(8)).to.be.an('object').that.has.all
          .keys('even', 'odd');
        expect(printOddEven(8)).to.have.property('even').that.is.an('array');
        expect(printOddEven(8)).to.have.property('odd').that.is.an('array');
        expect(printOddEven(8)).to.be.an('object').that.includes({
          even: [0, 2, 4, 6, 8],
          odd: [1, 3, 5, 7],
        });
      });
    it(`should return an object with keys "odd" and "even" and values
        "[1, 5, 7]" and "[2, 6, 8]" respectively when the input is
        [1, 2, 5, 6, 7, 8]`, () => {
        expect(printOddEven([1, 2, 5, 6, 7, 8])).to.be.an('object').that.has.all
          .keys('even', 'odd');
        expect(printOddEven([1, 2, 5, 6, 7, 8])).to.have
          .property('even').that.is.an('array');
        expect(printOddEven([1, 2, 5, 6, 7, 8])).to.have
          .property('odd').that.is.an('array');
        expect(printOddEven([1, 2, 5, 6, 7, 8])).to.be.an('object')
          .that.includes({
            even: [2, 6, 8],
            odd: [1, 5, 7],
          });
      });
    it(`should return an object with keys "odd" and "even" and values
        "[1, 3, 7, 11]" and "[2, 6, 10, 16]" respectively when the input is
        [1, 2, 3, 6, 7, 10, 11, 16]`, () => {
        expect(printOddEven([1, 2, 3, 6, 7, 10, 11, 16])).to.be
          .an('object').that.has.all
          .keys('even', 'odd');
        expect(printOddEven([1, 2, 3, 6, 7, 10, 11, 16])).to.have
          .property('even').that.is.an('array');
        expect(printOddEven([1, 2, 3, 6, 7, 10, 11, 16])).to.have
          .property('odd').that.is.an('array');
        expect(printOddEven([1, 2, 3, 6, 7, 10, 11, 16])).to.be.an('object')
          .that.includes({
            even: [2, 6, 10, 16],
            odd: [1, 3, 7, 11],
          });
      });
    it(`should return an object with keys "odd" and "even" and values "[]"
        and "[0]" respectively when the input is [0]`, () => {
        expect(printOddEven([0])).to.be.an('object').that.has.all
          .keys('even', 'odd');
        expect(printOddEven([0])).to.have.property('even').that.is.an('array');
        expect(printOddEven([0])).to.have.property('odd').that.is.an('array');
        expect(printOddEven([0])).to.be.an('object').that.includes({
          even: [0],
          odd: [],
        });
      });
    it(`should return an object with keys "odd" and "even" and values "[]"
      and "[0]" respectively when the input is [0]`, () => {
        expect(printOddEven([1, 9])).to.be.an('object').that.has.all
          .keys('even', 'odd');
        expect(printOddEven([1, 9])).to.have.property('even').that.is
          .an('array');
        expect(printOddEven([1, 9])).to.have.property('odd').that.is
          .an('array');
        expect(printOddEven([1, 9])).to.be.an('object').that.includes({
          even: [],
          odd: [1, 9],
        });
      });
  });
});
