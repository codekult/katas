const maxAndMin = (xs, ys) =>
    xs.reduce((maxMin, x) =>
        ys.reduce(([max, min], y) =>
            (diff => [
                max === undefined || max < diff ? diff : max,
                min === undefined || min > diff ? diff : min
            ])(x > y ? (x - y) : (y - x))
        , maxMin)
    , []);
