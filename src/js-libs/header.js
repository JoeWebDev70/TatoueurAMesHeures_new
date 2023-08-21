const currentPage = document.querySelector("body");

//HEADER CREATE
//create header and nav
const navHeader = document.createElement("nav");
const generalHeader = document.querySelector("header");

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
//accueil
const divMenu = document.createElement("div");
const pIndex = document.createElement("p");
const aIndex = document.createElement("a");
aIndex.href = "./index.html";
aIndex.classList.add("link_page");
aIndex.classList.add("current_page");
const aIndexContent = document.createTextNode("Accueil");
//contact
const pContact = document.createElement("p");
const aContact = document.createElement("a");
aContact.href = "./index.html#contact_container";
aContact.classList.add("link_page");
const aContactContent = document.createTextNode("Contact");
//galerie
const pGalerie = document.createElement("p");
const aGalerie = document.createElement("a");
aGalerie.href = "./galerie.html";
aGalerie.classList.add("link_page");
const aGalerieContent = document.createTextNode("Galerie");
//insert menu
navHeader.appendChild(divMenu);
//accueil
divMenu.appendChild(pIndex);
pIndex.appendChild(aIndex);
aIndex.appendChild(aIndexContent);
//contact
divMenu.appendChild(pContact);
pContact.appendChild(aContact);
aContact.appendChild(aContactContent);
//galerie
divMenu.appendChild(pGalerie);
pGalerie.appendChild(aGalerie);
aGalerie.appendChild(aGalerieContent);

//insert nav in header
generalHeader.appendChild(navHeader);


//HEADER ACTION

// underline current page
if (currentPage.id == "accueil") {
    aIndex.classList.add("current_page");
    aGalerie.classList.remove("current_page");
} else if (currentPage.id == "galerie") {
    aIndex.classList.remove("current_page");
    aGalerie.classList.add("current_page");
} else {
    aIndex.classList.remove("current_page");
    aGalerie.classList.remove("current_page");
}

