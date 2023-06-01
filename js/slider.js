document.addEventListener("DOMContentLoaded", () =>{

    const prevBtn = document.querySelector(".arrow-left-btn");
    const nextBtn = document.querySelector(".arrow-right-btn");
    const carouselContainer = document.querySelector(".source-item-wrap");
    const Container = document.querySelector(".source-con");
    const itemWidth = document.querySelector(".source-item").offsetWidth;
    const marginRight = parseInt(window.getComputedStyle(document.querySelector(".source-item")).marginRight);
    var maxRight = numberImages();
    console.log(maxRight);
    
    // Événement lorsqu'on clique sur le bouton "Précédent"
    prevBtn.addEventListener("click", () => {
        const translateX = (itemWidth + marginRight); // Calcul de la valeur de translation
        let oldpos = parseFloat(carouselContainer.style.transform.replace("translateX(", "").replace("px)", ""));
        if(oldpos<0){
        carouselContainer.style.transform = `translateX(${oldpos + translateX}px)`; // Applique la translation
        maxRight++;
    }
    
    });
    
    // Événement lorsqu'on clique sur le bouton "Suivant"
    nextBtn.addEventListener("click", () => {
        const translateX = (itemWidth + marginRight); // Calcul de la valeur de translation
        let oldpos = parseFloat(carouselContainer.style.transform.replace("translateX(", "").replace("px)", ""));
        if(maxRight>0){
            maxRight--;
            carouselContainer.style.transform = `translateX(${oldpos - translateX}px)`; // Applique la translation
        }
        
      });
    
      function numberImages(){
       const nbImgDisplayed = Container.offsetWidth/(itemWidth+marginRight);
       console.log(carouselContainer.offsetWidth);
       return 5-nbImgDisplayed;
      }
    
    
    });