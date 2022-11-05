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