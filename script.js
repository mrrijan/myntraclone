const navitem = document.querySelector(".nav-item");
const burger = document.querySelector(".burger");
burger.addEventListener("click",()=>{
    navitem.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    navitem.classList.remove("active");
}))