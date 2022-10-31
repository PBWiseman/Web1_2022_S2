const BASE_URL = `https://api.unsplash.com`;
let divs = document.querySelectorAll(".display");

fetch(`${BASE_URL}/search/photos/?query=wine&per_page=15&client_id=bwVpM_zDrAu_zxRv4s91vL-QY7-YfISTQNTRhefof9c`)
.then(response => response.json())
.then(data => {
    data["results"].forEach((result, index) => {
        console.log(result)
        let img = document.createElement("img");
        img.src = result["urls"]["small"];
        divs[index].append(img);
    });
})

let menu = document.querySelector("#popout")
let menuclick = document.querySelector("button");
menuclick.addEventListener("click", _ =>{
  if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
})