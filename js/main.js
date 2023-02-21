const snbBtn = document.querySelector("#snb .btn-menu");
const subMenu = document.querySelector("#snb .sub-menu");
const Winter = document.querySelector(".winter");
const Summer = document.querySelector(".summer");
const winterBtnEl = document.querySelector(".winterBtn");
const summerBtnEl = document.querySelector(".summerBtn");
const bgVideoEl = document.querySelector(".bgVideo");

const winterbg = document.createElement("video");
winterbg.innerHTML = '<video src="./video/snow.mp4" autoplay muted loop></video>'

snbBtn.addEventListener("click", function() {
  if(subMenu.classList.contains("hide")){
    subMenu.classList.remove("hide");
  } else {
    subMenu.classList.add("hide");
  }
})

winterBtnEl.addEventListener("click",function() {
  // alert("hi");
  bgVideoEl.innerHTML = '<video src="./video/snow.mp4" autoplay muted loop></video>';
})

summerBtnEl.addEventListener("click",function() {
  // alert("hi");
  bgVideoEl.innerHTML = '<video src="./video/video.mp4" autoplay muted loop></video>';
})




// bg.addEventListener("click" ,function(){
//   if(Winter.classList.contains("hide")){
//     Winter.classList.remove("hide");
//     Summer.classList.add("hide");

//   }else {
//     Summer.classList.add("hide");
//     Summer.classList.remove("hide");

//   }
// })

