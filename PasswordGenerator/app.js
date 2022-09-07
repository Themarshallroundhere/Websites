const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEL = document.querySelector(".alert-container");

btnEl.addEventListener('click', ()=>{
    createPassword()
})
copyIconEl.addEventListener('click', ()=>{
    copyPassword()
    if(inputEl.value){
    alertContainerEL.classList.remove("active")
    setTimeout(()=>{
        alertContainerEL.classList.add("active");
    }, 2000)
}
})
function createPassword(){
    const chars = "qwertyuiopplkjhgfdsaazxcvbnm,./';[]=-0987654321`1"
    const passwordLength = 14;
    let password = "";
for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    console.log(randomNum, password);
}
inputEl.value = password;
  navigator.clipboard.writeText(inputEl.value)
    alertContainerEL.innerText = password + " copied!"
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
  
}