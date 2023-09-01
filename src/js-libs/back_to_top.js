export function toTop(){
    const backToTop = document.querySelector(".back_to_top");
    window.addEventListener('scroll', function(e) {
            if(window.pageYOffset >= (window.innerHeight * 0.1)){
                backToTop.classList.remove("item_hide");
                backToTop.classList.add("item_show");
            }else{
                backToTop.classList.add("item_hide");
                backToTop.classList.remove("item_show");
            }
    });
}
