const tree = {
    value: 6,
    children: [
        {
            value: 6,
            children: [{ value: 6 }, { value: 6, children: [{ value: 6 }] }],
        },
        { children: [{ value: 6, children: [{ value: 6 }, { value: 6 }] }] },
    ],
    v: {},
};

const fn = (TREE) => {
    let count = 0;

    (function recoursion(ü) {
        for (let el in ü) {
            if (el === "value") count += ü[el];
            if (Array.isArray(TREE[el]))
                ü[el].forEach((item) => recoursion(item));
            else if (typeof TREE[el] === "object") recoursion(ü[el]);
        }
    })(TREE);

    return count;
};

console.log(fn(tree));
console.log("Hello");
