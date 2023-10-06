
const container = document.querySelector(".grid")

for (let i = 0; i < 100; i++) {

    n = i + 1

    if (n % 3 === 0 && n % 5 === 0) {      

        const newDiv = document.createElement("div")
        newDiv.append('FizzBuzz')
        newDiv.className = "block fizz-buzz"
        container.append(newDiv)

    } else if (n % 3 === 0) {   

        const newDiv = document.createElement("div")
        newDiv.append('Fizz')
        newDiv.className = "block fizz"
        container.append(newDiv)

    } else if (n % 5 === 0) {  

        const newDiv = document.createElement("div")
        newDiv.append('Buzz')
        newDiv.className = "block buzz"
        container.append(newDiv)

    } else {
        const newDiv = document.createElement("div")
        newDiv.append(n)      
        newDiv.className = "block"  
        container.append(newDiv)
    }

}