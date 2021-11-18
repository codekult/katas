const first = xs => xs[0];

const last = xs => xs[xs.length - 1];

const tail = xs => xs.slice(1);

const dropLast = n => xs => xs.slice(0, xs.length - n);

const reduce = reducer => acc => xs => xs.reduce(reducer, acc);

const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x);

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

const id = x => x;

module.exports = {
    first,
    last,
    tail,
    dropLast,
    reduce,
    compose,
    pipe,
    id
};
