const BASE_URL = `https://api.unsplash.com`;


fetch(`${BASE_URL}/search/photos/?query=wine&client_id=bwVpM_zDrAu_zxRv4s91vL-QY7-YfISTQNTRhefof9c`)
.then(response => response.json())
.then(data => {

    data("results").forEach(result => {
        let img = document.createElement("img");
        img.src = result["urls"]["regular"];
    });
    // let img_url = data["results"][1]["urls"]["regular"];
    // document.querySelector("#quality img").src = img_url
})