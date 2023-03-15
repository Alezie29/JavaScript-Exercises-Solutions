const fibonacci = function(num) {

num = parseInt(num);

if (num < 0) {
    return "OOPS";
}

let prev = 0;
let curr = 1;
    
    for (let i=1; i<num; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
}
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
