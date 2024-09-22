window.addEventListener("load", () => {
  const h1 = document.querySelector("h1")
  const br = document.querySelector("br")
  if (window.innerWidth > 750){
    h1.removeChild(br)
  h1.innerText = "We Are Creatives"
  }
})
const icon = document.querySelector(".icon");
const menu = document.querySelector(".mobile-nav")
icon.addEventListener("click", () => {
  if(!menu.classList.contains("active")){
    menu.classList.add("active");
  }else{
    menu.classList.remove("active");
  }
})