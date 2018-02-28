const { last, dropLast, reduce } = require('./utils');

const contraries = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
};

const dirReduc = reduce((dirs, dir) => (
    last(dirs) === contraries[dir]
        ? dropLast(1)(dirs)
        : [ ...dirs, dir]
))([]);
