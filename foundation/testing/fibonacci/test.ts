import test from 'tape';
import { fibonacci } from './fibonacci'

test('Testing fibonacci', t => {
    t.equal(fibonacci(11), 89);
    t.end()
})

test('Testing fibonacci', t => {
    t.equal(fibonacci(20), 6765);
    t.end()
})