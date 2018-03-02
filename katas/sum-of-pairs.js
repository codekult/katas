const sum_pairs = list => sum => {
    let past = new Set();
    for (let curr of list) {
        if (past.has(sum - curr)) {
            return [sum - curr, curr];
        }

        past.add(curr);
    }
};
