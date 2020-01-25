import test from 'tape';
import { countLetters } from './count-letters'

test('Letter counter', t => {
    t.deepEqual(countLetters('telegram'),{t: 1, e: 2, l: 1, g: 1, r: 1, a: 1, m: 1})
    t.end()
})