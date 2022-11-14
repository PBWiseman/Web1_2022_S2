const BASE_URL = `https://api.unsplash.com`;
let divs = document.querySelectorAll(".display");

fetch(`${BASE_URL}/search/photos/?query=wine&per_page=15&client_id=bwVpM_zDrAu_zxRv4s91vL-QY7-YfISTQNTRhefof9c`)
.then(response => response.json())
.then(data => {
    data["results"].forEach((result, index) => {
        let img = document.createElement("img");
        img.src = result["urls"]["small"];
        divs[index].append(img);
    });
})

let menu = document.querySelector("#popout")
let background = document.querySelector("#background_cover")
let menu_button = document.querySelector("button");
let inner_menu_button = menu.querySelector("button")
inner_menu_button.addEventListener("click", _ =>{
  menu.style.display = "none";
  background.style.display = "none";
})
menu_button.addEventListener("click", _ =>{
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