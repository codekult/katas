const { id } = require('./utils');

const number = num => (op = id) => op(num);

const zero = number(0);
const one = number(1);
const two = number(2);
const three = number(3);
const four = number(4);
const five = number(5);
const six = number(6);
const seven = number(7);
const eight = number(8);
const nine = number(9);

const plus = b => a => a + b;
const minus = b => a => a - b;
const times = b => a => a * b;
const dividedBy = b => a => a / b;
