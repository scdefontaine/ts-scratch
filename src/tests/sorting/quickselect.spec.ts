
import * as chai from 'chai';
import { quickselect } from '../../functions/searching/quickselect';

it('Quick Sort - Test Case #1', function () {
  chai.expect(quickselect([8, 5, 2, 9, 7, 6, 3], 3)).to.deep.equal(5);
});