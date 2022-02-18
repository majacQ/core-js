import { STRICT } from '../helpers/constants';

QUnit.test('String#padStart', assert => {
  const { padStart } = String.prototype;
  assert.isFunction(padStart);
  assert.arity(padStart, 1);
  assert.name(padStart, 'padStart');
  assert.looksNative(padStart);
  assert.nonEnumerable(String.prototype, 'padStart');
  assert.same('abc'.padStart(5), '  abc');
  assert.same('abc'.padStart(4, 'de'), 'dabc');
  assert.same('abc'.padStart(), 'abc');
  assert.same('abc'.padStart(5, '_'), '__abc');
  assert.same(''.padStart(0), '');
  assert.same('foo'.padStart(1), 'foo');
  assert.same('foo'.padStart(5, ''), 'foo');

  assert.throws(() => padStart.call(Symbol(), 10, 'a'), 'throws on symbol context');
  assert.throws(() => padStart.call('a', 10, Symbol()), 'throws on symbol argument');

  if (STRICT) {
    assert.throws(() => padStart.call(null, 0), TypeError);
    assert.throws(() => padStart.call(undefined, 0), TypeError);
  }
});
