import { Apple } from './Apples';
import test from 'tape';

test('Initiate Apple class', t => {
    let v: Apple = new Apple

    t.equal(v.getApple(), 'apple');
    t.end()
});

