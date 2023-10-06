
const container = document.querySelector(".container")

for (let i = 0; i < 100; i++) {

    n = i + 1

    if (n % 3 === 0 && n % 5 === 0) {      

        const newDiv = document.createElement("div")
        newDiv.append('FizzBuzz (' + n + ')')
        newDiv.className = "block FizzBuzz"
        container.append(newDiv)

    } else if (n % 3 === 0) {   

        const newDiv = document.createElement("div")
        newDiv.append('Fizz (' + n + ')')
        newDiv.className = "block Fizz"
        container.append(newDiv)

    } else if (n % 5 === 0) {  

        const newDiv = document.createElement("div")
        newDiv.append('Buzz (' + n + ')')
        newDiv.className = "block Buzz"
        container.append(newDiv)

    } else {
        const newDiv = document.createElement("div")
        newDiv.append(n)      
        newDiv.className = "block"  
        container.append(newDiv)
    }

}