import "./style.scss";
import {openLegalMentionPanel} from "./js-libs/mentions_legales.js";
import {observeAndDisplay} from "./js-libs/galerie.js";
import {toTop} from "./js-libs/back_to_top.js";

const accueilPage = document.querySelector("#accueil");
const galeriePage = document.querySelector("#galerie");
const mentionsPage = document.querySelector("#legal_mentions");


if (accueilPage){
    toTop();
}

if (galeriePage){
    observeAndDisplay();
    toTop();
}

if (mentionsPage){
    openLegalMentionPanel();
}
