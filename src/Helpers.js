const countInArray = (array, value) => {
    let count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            count++;
        }
    }
    return count;
}

const swapInArray = (array, index1, index2) => {
    let itemToSwap = array[index1];
    array[index1] = array[index2];
    array[index2] = itemToSwap;
    return array;
}