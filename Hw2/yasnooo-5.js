object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 111, 13],
        "gp": [12, 34, 116, 29]
    }
}
console.log(getRootProperty(object, 250));

function getRootProperty(object, number) {
    let root;
    root = FindRoot(object);
    if (root === undefined) {
        root = null
    }

    function FindRoot(object) {
        for (const key in object) {
            if (Array.isArray(object) && object.includes(number)) {
                return object;
            } else if (typeof object[key] === 'object') {
                root = FindRoot(object[key])
                if (root !== undefined) {
                    return key;
                }
            }
        }
    }
    return root;
}
