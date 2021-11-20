let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.menu')
console.log(menu)
toggle.addEventListener('click', ()=>{
    console.log("11")
    menu.classList.toggle('active')
    console.log(active)
})