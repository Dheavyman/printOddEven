import 'mocha';
import chai from 'chai';

const { expect } = chai;

describe('Print-odd-even function', () => {
  describe('for invalid inputs', () => {
    it('should return invalid input notification for string type', () => {
      expect(printOddEven('abc')).to.be.a('string');
      expect(printOddEven('abc')).to.equal(`Input must be of type number
      or array`);
    });
    it('should return invalid input notification for object type', () => {
      expect(printOddEven({ foo: 'bar' })).to.be.an('string');
      expect(printOddEven({ foo: 'bar' })).to.equal(`Input must be of type
      number or array`);
    });
  });
  describe('for valid inputs', () => {
    it('should return [1, 3, 5] and [2, 4] arrays when the input is 5', () => {
      expect(printOddEven(5)).to.be.an('object').that.includes({
        even: [2, 4],
        odd: [1, 3, 5]
      });
    });
    it(
      'should return [1, 3, 5, 7] and [2, 4, 6, 8] arrays when the input is 8',
      () => {
        expect(printOddEven(8)).to.be.an('object').that.includes({
          even: [2, 4],
          odd: [1, 3, 5]
        });
      }
    );
    it(`should return [1, 5, 7] and [2, 6, 8] arrays when the input is
      [1, 2, 5, 6, 7, 8]`, () => {
        expect(printOddEven([1, 2, 5, 6, 7, 8])).to.be.an('object')
          .that.includes({
            even: [2, 4],
            odd: [1, 3, 5]
          });
      });
    it(`should return [1, 3, 7, 11] and [2, 6, 10, 16] arrays when the input is
      [1, 2, 3, 6, 7, 10, 11, 16]`, () => {
        expect(printOddEven([1, 2, 3, 6, 7, 10, 11, 16])).to.be.an('object')
          .that.includes({
            even: [2, 4],
            odd: [1, 3, 5]
          });
      });
  });
});
