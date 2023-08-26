import "./style.scss";

const mainGallery = document.querySelector("#main_galerie");

if (mainGallery != null) {
    fetch("../ressources/loading_img.json").then(
        reponse => reponse.json()).then(
            data => {
                data.forEach(element => {
                    console.log(element);
                });
            }
        )
}