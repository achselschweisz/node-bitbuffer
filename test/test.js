'use strict';
/* global suite: false, setup: false, test: false,
    teardown: false, suiteSetup: false, suiteTeardown: false */
const assert = require('assert');
const BitBuffer = require('../');
/* eslint-disable no-extra-parens */



suite('BitBuffer', function() {
  test('#zeroinit', () => {
    const b = new BitBuffer(10);
    assert.equal(b.get(7), false);
    assert.equal(b.get(9), false);

		b.toggle(9);
		assert.equal(b.get(9), true);

		b.set(9);
		assert.equal(b.get(9), false);
  });


  test('#set', () => {
    const b = new BitBuffer(32, Buffer.alloc(32));
    assert.equal(b.get(13), false);
    assert.equal(b.get(14), false);
    assert.equal(b.get(15), false);
    b.set(14, true);
    assert.equal(b.get(13), false);
    assert.equal(b.get(14), true);
    assert.equal(b.get(15), false);
  });


  function big(bit) {
    const b = new BitBuffer(bit + 1);
    assert.equal(b.get(bit), false);
    b.set(bit, true);
    assert.equal(b.get(bit), true);
    assert.equal((b.buffer[(bit / 8) | 0] & 1 << bit % 8) !== 0, true);
  }


  test('#bigone_2852448540', () => {
    // const bit = Math.pow(2,31);
    big(2852448540);
  });


  test('#bigone_2g', () => {
    big(Math.pow(2, 31));
  });


  test('#bigone_4g', () => {
    big(Math.pow(2, 32) - 1);
  });


  test('#bigone_8g', () => {
    assert.throws(
      function() {
        new BitBuffer(Math.pow(2, 34));
      },
      RangeError
    );
  });
});
