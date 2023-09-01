export function observeAndDisplay(){

    const observer = new IntersectionObserver(function (entries) {
        for (const entry of entries) {
            loadDataImage(entry.target, entry.isIntersecting);
        }
    });

    const photoContainers = document.querySelectorAll(".photo_container");
    photoContainers.forEach(function (photoContainer) {
        observer.observe(photoContainer);
    });

}

function loadDataImage(target, intersect) {
    fetch("../ressources/loading_img.json")
        .then(function (reponse) {
            if (reponse.ok) { return reponse.json() }
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const p = document.createElement("p");
                const img = document.createElement("img");
                p.appendChild(img);
                switch (data[i].class) {
                    case "bras":
                        img.src = data[i].url;
                        img.alt = data[i].alt;
                        img.width = "330";
                        img.height = "250";
                        p.classList.add("bras");
                        break;
                    case "jambe":
                        img.src = data[i].url;
                        img.alt = data[i].alt;
                        img.width = "330";
                        img.height = "250";
                        p.classList.add("jambe");
                        break;
                    case "visage":
                        img.src = data[i].url;
                        img.alt = data[i].alt;
                        img.width = "330";
                        img.height = "250";
                        p.classList.add("visage");
                        break;
                    case "dessin":
                        img.src = data[i].url;
                        img.alt = data[i].alt;
                        img.width = "330";
                        img.height = "250";
                        p.classList.add("dessin");
                        break;
                    case "dos":
                        img.src = data[i].url;
                        img.alt = data[i].alt;
                        img.width = "330";
                        img.height = "250";
                        p.classList.add("dos");
                        break;
                    case "torse":
                        img.src = data[i].url;
                        img.alt = data[i].alt;
                        img.width = "330";
                        img.height = "250";
                        p.classList.add("torse");
                        break;
                }

                if (target && intersect) {
                    const tmpContainer = document.querySelector(`#${target.id}`);
                    if (p.classList.contains(target.id)) {
                        tmpContainer.appendChild(p);
                    }
                }
                else {
                    const tmpContainer = document.querySelector(`#${target.id}`);
                    
                    if (tmpContainer.childNodes.length > 0) {
                        const photosToRemove = document.querySelectorAll(`.${target.id}`);
                        photosToRemove.forEach(function (photoToRemove) {
                            tmpContainer.removeChild(photoToRemove);
                        });
                    }
                }
            }

        }).catch(error => console.log('Erreur de chargement JSON :', error));
}
