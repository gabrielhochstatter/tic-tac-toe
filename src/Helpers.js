const countInArray = (array, value) => {
    let count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            count++;
        }
    }
    return count;
}
