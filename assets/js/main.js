const BASE_URL = `https://api.unsplash.com`;
let divs = document.querySelectorAll(".display");

fetch(`${BASE_URL}/search/photos/?query=wine&per_page=${divs.length}&client_id=bwVpM_zDrAu_zxRv4s91vL-QY7-YfISTQNTRhefof9c`)
.then(response => response.json())
.then(data => {
  divs.forEach((div, index) => {
    let img = document.createElement("img");
    img.src = data["results"][index]["urls"]["small"];
    div.append(img)
  });
})

let menu = document.querySelector("#popout")
let background = document.querySelector("#background_cover")
menu.querySelector("button").addEventListener("click", _ =>{
  menu.style.display = "none";
  background.style.display = "none";
})
document.querySelector("button").addEventListener("click", _ =>{
  menu.style.display = "block";
  background.style.display = "block";
})
background.addEventListener("click", _ =>{
  menu.style.display = "none";
  background.style.display = "none";
})

let inView = element => {
  let ele = element.getBoundingClientRect();
  if ((ele.top - window.innerHeight + 20) < 0) 
  {
    element.classList.add("faded_in")
    element.classList.remove("fade_in")
  }
}

document.querySelectorAll(".fade_in").forEach(element => {
  document.addEventListener("DOMContentLoaded", _ => {
    inView(element)
  })
  document.addEventListener("scroll", _ => {
    inView(element)
  })
})