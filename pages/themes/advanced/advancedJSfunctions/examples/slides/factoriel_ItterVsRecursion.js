// n! = 1 * 2 * 3 ... (n-2) * (n -1) * n, n>0
// n! = 1, n=0
function factorielIterative(n) {
    let res = 1;

    for (let i = 1; i <= n; i++) {
        res = res*i;
    }

    return res;
}
console.log( factorielIterative(5) ); // 120

// n! = n * (n - 1)!, n>0
// n! = 1, n=0
function factorielRecursive(n) {
    if(n===0){
        return 1
    }else{
         return n*factorielRecursive(n-1)
    }
}
console.log( factorielRecursive(5) );