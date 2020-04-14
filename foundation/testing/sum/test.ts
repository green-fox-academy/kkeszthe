import test from 'tape';
import { Sum } from './Sum'

test('Test adding numbers together', t => {
    let testCase = new Sum;
    t.equal(testCase.sum([1,2,3,4,5,6]),21)
    t.end()

})
test('Test adding numbers together', t => {
    let testCase = new Sum;
    t.equal(testCase.sum([]),0)
    t.end()

})
test('Test adding numbers together', t => {
    let testCase = new Sum;
    t.equal(testCase.sum([3]),3)
    t.end()

})