{module, test} = QUnit
module \ES6

isIterator = -> typeof it is \object && typeof it.next is \function

test 'String#@@iterator' (assert)->
  assert.isFunction String::[Symbol?iterator]
  iter = 'qwe'[Symbol?iterator]!
  assert.ok isIterator(iter), 'Return iterator'
  assert.strictEqual iter[Symbol?toStringTag], 'String Iterator'
  assert.deepEqual iter.next!, {value: \q, done: no}
  assert.deepEqual iter.next!, {value: \w, done: no}
  assert.deepEqual iter.next!, {value: \e, done: no}
  assert.deepEqual iter.next!, {value: void, done: on}
  assert.strictEqual Array.from(\𠮷𠮷𠮷).length, 3
  iter = '𠮷𠮷𠮷'[Symbol?iterator]!
  assert.deepEqual iter.next!, {value: \𠮷, done: no}
  assert.deepEqual iter.next!, {value: \𠮷, done: no}
  assert.deepEqual iter.next!, {value: \𠮷, done: no}
  assert.deepEqual iter.next!, {value: void, done: on}