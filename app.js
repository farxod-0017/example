let main_grid = document.querySelector(".main_grid")

function renderData(data) {
    let html = ``
    data.forEach((item) =>{
    html +=`
     <div class="card">
        <span class="heart"><i class="fa-regular fa-heart"></i></span>
        <img src="${item.photo}" alt="">
        <h2>${item.title}</h2>
        <h3>${item.price}</h3>
        <h3>${item.location}</h3>
        <h4>${item.phone}</h4>
        <h4>${item.date}</h4>     
     </div>`

    main_grid.innerHTML = html
})

}
renderData(HOUSE)

let search = document.querySelector("#search")
let text = document.querySelector("#text")
search.addEventListener("submit", (e)=>{
    e.preventDefault()
    let regex = new RegExp(text.value, "gi")
    let filteredHouse = HOUSE.filter((item)=>{
        return item.title.match(regex)
    })
    renderData(filteredHouse)   
    
})

let price = document.querySelector("#price")
price.addEventListener("change", (e)=>{
    e.preventDefault()
    if(price.value === "cheap") {
        HOUSE.sort((a,b) => a.price-b.price)
    }else if(price.value === "expensive") {
        HOUSE.sort((b,a) => a.price-b.price)
    }
    
    
    renderData(HOUSE)
})

// let price_form = document.querySelector("#price_form")

// let button = document.querySelector("#price__button")
let year = document.querySelector("#year")
year.addEventListener("change", (e)=>{
    e.preventDefault()
    if(year.value === "old") {
        HOUSE.sort((a,b) => a.date-b.date)
    }else if(year.value === "new") {
        HOUSE.sort((b,a) => a.date-b.date)
    }


    renderData(HOUSE)
    
})


let like = document.querySelector("#like")
let modal = document.querySelector(".modal")
like.addEventListener("click", (e)=>{
    modal.classList.add("show_modal")
})

let closed = document.querySelector(".closed")
closed.addEventListener("click", (e)=>{
    modal.classList.remove("show_modal")
})






