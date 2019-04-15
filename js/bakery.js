input1 = 'F 1 386 F 2 963 F 3 374 F 4 371 F 5 685 F 6 47 F 7 132 F 8 909 F 9 433 B 1 386 B 2 963 B 3 374 B 4 371 B 5 685 B 6 47 B 7 132 B 8 909 B 9 71'

input2 = 'F 1 439 F 2 605 F 3 476 F 4 765 F 5 382 F 6 599 F 7 732 F 8 21 F 9 617 B 1 248 B 2 605 B 3 476 B 4 765 B 5 382 B 6 599 B 7 732 B 8 21 B 9 617'

input3 = 'F 1 52 F 2 746 F 3 866 F 4 12 F 5 892 F 6 918 F 7 514 F 8 794 F 9 385 B 1 52 B 2 746 B 3 13 B 4 7 B 5 892 B 6 918 B 7 514 B 8 794 B 9 385'

input4 = 'F 1 111 F 2 143 F 3 827 F 4 987 F 5 507 F 6 694 F 7 702 F 8 51 F 9 830 B 1 111 B 2 143 B 3 827 B 4 987 B 5 507 B 6 526 B 7 702 B 8 27 B 9 403'

input5 = 'F 1 739 F 2 164 F 3 227 F 4 778 F 5 423 F 6 538 F 7 155 F 8 425 F 9 878 B 1 739 B 2 164 B 3 227 B 4 778 B 5 423 B 6 538 B 7 155 B 8 425 B 9 878'

function countMismatches(string) {
    let n = 0;
    let F = {};
    let B = {};

    // split string into array
    array = string.split(' ');

    // loop through array
    for (let i = 0; i < array.length; i++) {
        // if an item is F...
        if (array[i] === 'F') {
            // take the next item (day) and set it as a key in object F, and the following item and set it as the value of that key
            F[array[i + 1]] = array[i + 2];
        }

        // do the same for B
        else if (array[i] === 'B') {
            B[array[i + 1]] = array[i + 2];
        }
    }

    // make arrays with the keys 
    const keysF = Object.keys(F);
    const keysB = Object.keys(B);

    // if the arrays don't have the same length, there's a problem with the data
    if (keysF.length !== keysB.length) {
        console.log('Error 1')
    }

    // check if the value of key named 1 is the same on both objects, and so on
    for (let i = 0; i < keysF.length; i++) {
        if (F[keysF[i]] !== B[keysB[i]]) {
            // if it's not, increase n by 1
            n += 1;
        }
    }

    console.log(n);
    return n;
};


countMismatches(input1);
countMismatches(input2);
countMismatches(input3);
countMismatches(input4);
countMismatches(input5);