
const fetchA = async () => {

    let list = document.querySelector("")
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')

    let mass = await response.json()
    console.log(mass);




}

fetchA()