let number = 2;

// statefull function
function squarte() {
    return number * number;
}

number = square();

// stateless function
const square = n => n * n;