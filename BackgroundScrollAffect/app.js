const bgImageEl = document.getElementById("bg-img")
window.addEventListener("scroll", ()=>{
    updateImage()
})

function updateImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900
    bgImageEl.style.backgroundSize = 190 - window.pageYOffset / 12 + "%"
}