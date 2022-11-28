function Fibonacci(num){
    const fib = [1,1];
    for(let i = 2; i < num; i++)
    {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib;
}

const fibSerie = Fibonacci(6);

console.log(fibSerie);