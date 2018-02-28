const last = list => list[list.length - 1];

const dropLast = n => list => list.slice(0, list.length - n);

const reduce = reducer => acc => list => list.reduce(reducer, acc);

module.exports = {
    last,
    dropLast,
    reduce
};
