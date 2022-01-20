// Add your functions here

function map(array, cb){
    const newArray = array.map(element => {
  return cb(element);
});
return newArray;
}

function reduce(array, cb, startPoint = 0) {
    let t = (!!startPoint) ? startPoint : array[0]
    let i = (!!startPoint) ? 0 : 1

    for (; i < array.length; i++) {
        t = cb(array[i], t)
    }
    return t
}

