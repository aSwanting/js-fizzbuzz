for (let i = 0; i < 100; i++) {

    n = i + 1

    if (n % 3 === 0 && n % 5 === 0) {
        console.log(n + ' FizzBuzz')

    } else if (n % 3 === 0) {
        console.log(n + ' Fizz')

    } else if (n % 5 === 0) {
        console.log(n + ' Buzz')

    } else {
        console.log(n)
    }


}