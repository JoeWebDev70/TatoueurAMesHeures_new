export function openLegalMentionPanel() {
    const legalMentions = document.querySelectorAll("dt");
    
    legalMentions.forEach(legalMention => {
        legalMention.addEventListener("click", function(){
            const elementHasActive = document.querySelector(".active");
    
            //Verifier qu'on a trouver un élément et que l'élément trouvé n'est pas celui cliqué
            if(elementHasActive && this !== elementHasActive) {
                elementHasActive.classList.remove("active");
            }
            //clic à nouveau referme
            this.classList.toggle("active");
           
    
        });
    });
}
    