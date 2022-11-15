const BASE_URL = `https://api.unsplash.com`;
let divs = document.querySelectorAll(".display");

//This will get as many pictures as there are .display divs
fetch(`${BASE_URL}/search/photos/?query=wine&per_page=${divs.length}&client_id=bwVpM_zDrAu_zxRv4s91vL-QY7-YfISTQNTRhefof9c`)
.then(response => response.json())
.then(data => {
  //Appends an image to each selected div
  divs.forEach((div, index) => {
    let img = document.createElement("img");
    img.src = data["results"][index]["urls"]["small"];
    div.append(img)
  });
})

//Adds click events to open and close the menu
let menu = document.querySelector("#popout")
let background = document.querySelector("#background_cover")

//Main page button
document.querySelector("button").addEventListener("click", _ =>{
  menu.style.display = "block";
  background.style.display = "block";
})

//Popout menu button
menu.querySelector("button").addEventListener("click", _ =>{
  menu.style.display = "none";
  background.style.display = "none";
})

//Faded background click event
background.addEventListener("click", _ =>{
  menu.style.display = "none";
  background.style.display = "none";
})

//On scroll and on page load calls the method to check if on page
document.querySelectorAll(".fade_in").forEach(element => {
  document.addEventListener("DOMContentLoaded", _ => {
    inView(element)
  })
  document.addEventListener("scroll", _ => {
    inView(element)
  })
})

//Checks if element is on page and fades it in
let inView = element => {
  let ele = element.getBoundingClientRect();
  if ((ele.top - window.innerHeight + 20) < 0) 
  {
    element.classList.add("faded_in")
    element.classList.remove("fade_in")
  }
  if ((ele.top - window.innerHeight + 20) > -70) 
  {
    element.classList.add("fade_in")
    element.classList.remove("faded_in")
  }
}