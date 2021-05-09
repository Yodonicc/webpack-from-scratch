module.exports = function(a, b){
    return a + b
}

var sum = require('./sum')
console.log(sum(1, 2))