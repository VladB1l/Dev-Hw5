let arr1 = ['XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
]

let arr2 = ['XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'
]
islandsPerimeter(arr1);

function islandsPerimeter(arr) {
    let totalPerimeter = 0;
    let visitedIslands = new Set();

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let PerimeterOfIsland = 0;
            FindIsland(i, j);
            totalPerimeter = totalPerimeter + PerimeterOfIsland;

            function FindIsland(row, column) {
                if (arr[row][column] === "X" && !visitedIslands.has(`${row},${column}`)) {
                    PerimeterOfIsland = PerimeterOfIsland + 4;
                    visitedIslands.add(`${row},${column}`);

                    if (column + 1 < arr[i].length && arr[row][column + 1] === "X") {
                        PerimeterOfIsland = PerimeterOfIsland - 2;
                        FindIsland(row, column + 1);
                    }
                    if (row + 1 < arr.length && arr[row + 1][column] === "X") {
                        PerimeterOfIsland = PerimeterOfIsland - 2;
                        FindIsland(row + 1, column);
                    }
                }
            }
        }
    }
    return console.log(`Total land perimeter: ${totalPerimeter}`);
}
