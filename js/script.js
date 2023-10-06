


for (let i = 0; i < 100; i++) {
    
    const container = document.querySelector(".grid")
    const newDiv = document.createElement("div")    

    if ((i+1) % 3 === 0 && (i+1) % 5 === 0) {
        newDiv.append('FizzBuzz')
        newDiv.className = "block fizz-buzz"

    } else if ((i+1) % 3 === 0) {
        newDiv.append('Fizz')
        newDiv.className = "block fizz"

    } else if ((i+1) % 5 === 0) {
        newDiv.append('Buzz')
        newDiv.className = "block buzz"

    } else {
        newDiv.append(i+1)
        newDiv.className = "block"
    }

    container.append(newDiv)

}