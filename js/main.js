const snbBtn = document.querySelector("#snb .btn-menu");
const subMenu = document.querySelector("#snb .sub-menu");
const Winter = document.querySelector(".winter");
const bg = document.querySelector(".bgbtn")

snbBtn.addEventListener("click", function() {
  if(subMenu.classList.contains("hide")){
    subMenu.classList.remove("hide");
  } else {
    subMenu.classList.add("hide");
  }
})

bg.addEventListener("click" ,function(){
  if(Winter.classList.contains("hide")){
    Winter.classList.remove("hide");
    
  }else {
    Winter.classList.add("hide");
  }
})

