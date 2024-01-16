let list = document.querySelector(".post-List")
let prev = document.querySelector("#prev")
let next = document.querySelector("#next")
const fetchA = async (page) => {


    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/?_page=${page}&_limit=5`)

    let mass = await response.json()
    console.log(mass);


    list.innerHTML = ""
    mass.forEach(element => {
        list.insertAdjacentHTML('afterbegin', `<div class="post-item">
        <h2>${element.title}</h2>
        <p class="text">${element.body}</p>
      </div>`)
    });

}

let page = 1
fetchA(page)

prev.onclick = () => {
    if (page > 1) {
        page--
    }
    fetchA(page)
}
next.onclick = () => {
    if (page > 1) {
        page++
    }
    fetchA(page)
}