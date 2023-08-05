//HEADER
const generalHeader = document.querySelector("header");

//create nav
const navHeader = document.createElement("nav");

// create logo and link
const pLogo = document.createElement("p");
const aLogo = document.createElement("a");
aLogo.href = "./index.html";
aLogo.classList.add("link_page");
const iLogo = document.createElement("img");
iLogo.src = "./ressources/images/logos/logo_entreprise_100x80.webp";
iLogo.alt = "Logo Tatoueur À mes Heures";
iLogo.style.width = "100px";
iLogo.style.height = "80px";
//insert logo
navHeader.appendChild(pLogo);
pLogo.appendChild(aLogo);
aLogo.appendChild(iLogo);

//create menu
const divMenu = document.createElement("div");
const pIndex = document.createElement("p");
const aIndex = document.createElement("a");
aIndex.href = "./index.html";
aIndex.classList.add("link_page");
const aIndexContent = document.createTextNode("Accueil");
const pGalerie = document.createElement("p");
const aGalerie = document.createElement("a");
aGalerie.href = "./galerie.html";
aGalerie.classList.add("link_page");
const aGalerieContent = document.createTextNode("Galerie");
//insert menu
navHeader.appendChild(divMenu);
divMenu.appendChild(pIndex);
pIndex.appendChild(aIndex);
aIndex.appendChild(aIndexContent);
divMenu.appendChild(pGalerie);
pGalerie.appendChild(aGalerie);
aGalerie.appendChild(aGalerieContent)

//insert nav in header
generalHeader.appendChild(navHeader)