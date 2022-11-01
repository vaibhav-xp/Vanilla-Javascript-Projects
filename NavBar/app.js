const menu = document.querySelector(".bars")
const sidebar = document.querySelector(".nav-mid")

menu.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar")
})

let q = document.getElementsByClassName('.nav-mid')
q.firstElementChild.firstElementChild.style.color = 'green'