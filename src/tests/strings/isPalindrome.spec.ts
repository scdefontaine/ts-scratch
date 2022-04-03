import * as chai from 'chai';
import { palindromeCheck } from '../../functions/strings/palindromeCheck';

it('Is Palindrome Check - Test Case #1', function () {
  chai.expect(palindromeCheck()).to.deep.equal(true);
});
