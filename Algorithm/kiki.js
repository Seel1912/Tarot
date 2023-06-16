let n = 5;
let b = 1;
function solvedProblem(n) {
    for (let i = 1; i < n; i++) {
        b = i * b
    }
    return b
}
solvedProblem(n); 