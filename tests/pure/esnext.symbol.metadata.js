import Symbol from 'core-js-pure/features/symbol';

QUnit.test('Symbol.metadata', assert => {
  assert.true('metadata' in Symbol, 'Symbol.metadata available');
  assert.true(Object(Symbol.metadata) instanceof Symbol, 'Symbol.metadata is symbol');
});
