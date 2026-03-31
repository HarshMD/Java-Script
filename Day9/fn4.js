
function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;
}

let add = sum(100);
console.log(add);

