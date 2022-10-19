const menu = document.querySelector(".bars")
const sidebar = document.querySelector(".nav-mid")

menu.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar")
})