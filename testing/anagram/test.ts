import test from 'tape';
import { anagramChecker } from './anagram'

test('Test anagram', t => {

    t.equal(anagramChecker('deam','mead'), true);
    t.end();
});
test('Test anagram', t => {

    t.equal(anagramChecker('beam','mead'), false);
    t.end();
});