truck = [["(-)", "[IIII]", "[))))]"], ["IuI", "[llll]"], ["[@@@@]", "UwU","[IlII]"], ["IuI", "[))))]", "x"], ["[UUUU]"]];

console.log(`Sets of sausages: "${UnpackPackages(truck)}"`);

function UnpackPackages(truck) {
    let sausages = "";
    let counter = 1;
    for (const box of truck) {
        for (let package of box) {
            if (package.indexOf('[') !== -1 && package.lastIndexOf(']') !== -1) {
                package = package.slice(0, 0) + package.slice(1, package.length - 1);
                let typeOfPackage = package[0];
                for (let i = 0; i < package.length; i++) {
                    if (package[i] !== typeOfPackage || package.length !== 4) {
                        typeOfPackage = 'damaged';
                        break;
                    }
                }
                if (typeOfPackage !== 'damaged') {
                    if (counter % 5 !== 0) {
                        sausages = sausages + ` ${package[0]}`.repeat(4);
                    }
                    counter++;
                }
            }
        }
    }
    return sausages.trim();
}
// I - Straight sausages, ) - curvy sausages , @ - twirly sausages , l - 0_o;