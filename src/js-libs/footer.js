// FOOTER
const generalFooter = document.querySelector("footer");

//create link legal mentions
const pMentions = document.createElement("p");
const aMentions = document.createElement("a");
aMentions.href = "./mentions_legales.html";
aMentions.classList.add("link_page");
const aMentionsContent = document.createTextNode("Mentions Légales");
//insert legal mentions
generalFooter.appendChild(pMentions);
pMentions.appendChild(aMentions);
aMentions.appendChild(aMentionsContent);

//create copyright
const pCopyright = document.createElement("p");
const aCopyright= document.createElement("a");
aCopyright.href = "./index.html";
aCopyright.classList.add("link_page");
const spanCopyright = document.createElement("span");
const aCopyrightContent1 = document.createTextNode("Tatoueur À mes Heures");
const aCopyrightContent2 = document.createTextNode(" \u00a9 2023");
//insert copyright
generalFooter.appendChild(pCopyright);
pCopyright.appendChild(aCopyright);
aCopyright.appendChild(spanCopyright);
spanCopyright.appendChild(aCopyrightContent1);
pCopyright.appendChild(aCopyrightContent2);

//create div social media
const divSocial = document.createElement("div");
divSocial.classList.add("social_media");
//insert social media
generalFooter.appendChild(divSocial);

//create facebook
const pFacebook = document.createElement("p");
pFacebook.classList.add("facebook");
const aFacebook = document.createElement("a");
aFacebook.href = "https://www.facebook.com";
aFacebook.classList.add("link_page");
const iFacebook = document.createElement("img");
iFacebook.src = "./ressources/images/logos/logos_25x25.webp";
iFacebook.alt = "Logo Facebook, liens vers les réseaux sociaux https://www.facebook.com";
//insert facebook
divSocial.appendChild(pFacebook);
pFacebook.appendChild(aFacebook);
aFacebook.appendChild(iFacebook);
//create instagram
const pInstagram = document.createElement("p");
pInstagram.classList.add("instagram")
const aInstagram = document.createElement("a");
aInstagram.href = "https://www.instagram.com";
aInstagram.classList.add("link_page");
const iInstagram = document.createElement("img");
iInstagram.src = "./ressources/images/logos/logos_25x25.webp";
iInstagram.alt = "Logo Instagram, liens vers les réseaux sociaux https://www.instagram.com";
//insert instagram
divSocial.appendChild(pInstagram);
pInstagram.appendChild(aInstagram);
aInstagram.appendChild(iInstagram);



