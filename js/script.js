


for (let i = 1; i <= 100; i++) {
    
    const container = document.querySelector(".grid")
    const newDiv = document.createElement("div")    

    if (i % 3 === 0 && i % 5 === 0) {
        newDiv.append('FizzBuzz')
        newDiv.className = "block fizz-buzz"        

    } else if (i % 3 === 0) {
        newDiv.append('Fizz')
        newDiv.className = "block fizz"    

    } else if (i % 5 === 0) {
        newDiv.append('Buzz')
        newDiv.className = "block buzz"       

    } else {
        newDiv.append(i)
        newDiv.className = "block"        
    }

    container.append(newDiv)

}