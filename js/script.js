


for (let i = 0; i < 100; i++) {
    
    const container = document.querySelector(".grid")
    const newDiv = document.createElement("div")

    n = i + 1

    if (n % 3 === 0 && n % 5 === 0) {
        newDiv.append('FizzBuzz')
        newDiv.className = "block fizz-buzz"

    } else if (n % 3 === 0) {
        newDiv.append('Fizz')
        newDiv.className = "block fizz"

    } else if (n % 5 === 0) {
        newDiv.append('Buzz')
        newDiv.className = "block buzz"

    } else {
        newDiv.append(n)
        newDiv.className = "block"
    }

    container.append(newDiv)

}