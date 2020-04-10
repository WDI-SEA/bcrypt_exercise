let hashed = []
const hash = (array) => {
    array.forEach( (num) => {
        hashed.push(num%8)
    })
    return hashed
}

console.log(hash([25,1,19,8,15,13,1]))