// var options = {
//     root: document.querySelector("#scrollArea"),
//     rootMargin: "0px",
//     threshold: 1.0,
//   };
  
//   var observer = new IntersectionObserver(callback, options);


const observer = new IntersectionObserver(function(entries){
    console.log("entries", entries);
});

const mainGallery = document.querySelector("#main_galerie");
const photoContainers = document.querySelectorAll("photo_container");
photoContainers.forEach(function(photoContainer) {
    observer.observe(photoContainer);
});


if (mainGallery != null) {
    fetch("../ressources/loading_img.json")
    .then(reponse => reponse.json())
    .then(data => {
                for (let i = 0; i < data.length; i++) {
                    const p = document.createElement("p");
                    const img = document.createElement("img");
                    switch (data[i].class) {
                        case "bras":
                            const brasContainer = document.querySelector("#bras");
                            p.appendChild(img);
                            img.src = data[i].url;
                            brasContainer.appendChild(p);
                            break;
                        case "jambe":
                            const jambeContainer = document.querySelector("#jambe");
                            p.appendChild(img);
                            img.src = data[i].url;
                            jambeContainer.appendChild(p);
                            break;
                        case "visage":
                            const visageContainer = document.querySelector("#visage");
                            p.appendChild(img);
                            img.src = data[i].url;
                            visageContainer.appendChild(p);
                            break;
                        case "dessin":
                            const dessinContainer = document.querySelector("#dessin");
                            p.appendChild(img);
                            img.src = data[i].url;
                            dessinContainer.appendChild(p);
                            break;
                        case "dos":
                            const dosContainer = document.querySelector("#dos");
                            p.appendChild(img);
                            img.src = data[i].url;
                            dosContainer.appendChild(p);
                            break;
                        case "torse":
                            const torseContainer = document.querySelector("#torse");
                            p.appendChild(img);
                            img.src = data[i].url;
                            torseContainer.appendChild(p);
                            break;
                    }

                }
            }).catch(error => console.error('Erreur de chargement JSON :', error));
}
