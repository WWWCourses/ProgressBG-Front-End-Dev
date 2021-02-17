// n! = 1 * 2 * 3 ... (n-2) * (n -1) * n, n>0
// n! = 1, n=0
function factorielIterative(n) {
    let res = 1;

    for (let i = 1; i <= n; i++) {
        res = res*i;
    }

    return res;
}
// console.log( factorielIterative(5) ); // 120

// n! = n * (n - 1)!, n>0
// n! = 1, n=0
function factorial(n){
    if(n===0){ // recursion end condiotion
        return 1
    }else{
        return n*factorial(n-1) // recursive call
    }
}
console.log( factorial(3) );

function fact(n) {
    return n===0? 1: n*factorial(n-1);
}

console.log( fact(5) );