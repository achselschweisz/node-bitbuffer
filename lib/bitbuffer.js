'use strict';
// Atom doesn't like me with this all of a sudden?: "indent": [2, 2, {"SwitchCase": 1}],


class BitBuffer {
  constructor(number, buffer) {
    const size = Math.ceil(number / 8);
		this.buffer = buffer || Buffer.alloc(size, 0);
  }


  set(index, bool) {
    const pos = index >>> 3;
    if (bool) {
      this.buffer[pos] |= 1 << index % 8;
    } else {
      this.buffer[pos] &= ~(1 << index % 8);
    }
  }


  get(index) {
    return (this.buffer[index >>> 3] & 1 << index % 8) !== 0;
  }


  toggle(index) {
    this.buffer[index >>> 3] ^= 1 << index % 8;
  }
}
module.exports = BitBuffer;
