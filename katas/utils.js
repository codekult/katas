const head = list => list[0];

const last = list => list[list.length - 1];

const tail = list => list.slice(1);

const dropLast = n => list => list.slice(0, list.length - n);

const reduce = reducer => acc => list => list.reduce(reducer, acc);

const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x);

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

const id = x => x;

module.exports = {
    head,
    last,
    tail,
    dropLast,
    reduce,
    compose,
    pipe,
    id
};
