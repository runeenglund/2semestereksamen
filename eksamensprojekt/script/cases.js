/* Anders's kode */

let galleryImg = document.querySelectorAll(".galleri-img");
let getLatestOpenedeImg;
let windowWidth = window.innerWidth;


if(galleryImg) {
    galleryImg.forEach(function(image, index){
        image.onclick = function() {
            /* Finder popup billedets url */
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("eksamensprojekt/images/img-galleri/thumbnails/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            /* Kompenserer for z-indeks (starter ved 0 og ikke 1). Plusser 1 på, så det første billede svarer til nummer 1  */
            getLatestOpenedeImg = index + 1;

            /* Går ind og og laver en container hvor det nye billede kan være i  */
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            /* Finder det nye billede som skal ind i containeren og sætter det ind */
            let newImg =document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "/eksamensprojekt/images/img-galleri/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");





            /* Laver næste og forrige knap med JS når det næste billeder er færdig med at loade. */
            newImg.onload = function () {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 100;

                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Næste");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Forrige");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";

                let overlayDiv = document.createElement("div");
                let overlayH5 = document.createElement("h5");
                let tekstP = document.createElement("p"); 
                let mereTekstP = document.createElement("p"); 
                let linkP = document.createElement("p");
                let overlayHeader = document.createTextNode("Struers");
                let overlayTekst = document.createTextNode("50% flere leads hos Struers med nyt digitalt kontaktflow");
                let overlayMereTekst = document.createTextNode("Selvom Struers var dygtige til at tiltrække trafik til deres website, fik Struers ikke nok gode leads. Derfor besluttede de sig for i samarbejde med Pentia at optimere kontakt-flowet på websitet.");
                let linkPTekst = document.createTextNode("Læs mere om Struer casen");
                overlayDiv.appendChild(overlayH5);
                overlayDiv.appendChild(tekstP);
                overlayDiv.appendChild(mereTekstP);
                overlayDiv.appendChild(linkP);
                overlayH5.appendChild(overlayHeader);
                tekstP.appendChild(overlayTekst);
                mereTekstP.appendChild(overlayMereTekst);
                linkP.appendChild(linkPTekst);
                container.appendChild(overlayDiv);
                overlayDiv.setAttribute("class", "divPopup");
                overlayDiv.setAttribute("onclick", "changeImg(0)");
                overlayH5.setAttribute("class", "overlay-header-popup");
                tekstP.setAttribute("class", "overlay-text-popup");
                mereTekstP.setAttribute("class", "overlay-meretekst-popup");
                linkP.setAttribute("class", "overlay-linkptekst-popup");
            };

        };

    });
};


/* Fjerner billederne */
function closeImg () {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
    document.querySelector(".divPopup").remove();


}

/* Laver et nyt img og sætter det ind i forhold til hvilket nummer billedet er i forhold til rækkefølge */
function changeImg(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedeImg + 1;
        if(calcNewImg > galleryImg.length) {
            calcNewImg = 1;
        }
    }
    else if (changeDir === 0) {
          calcNewImg = getLatestOpenedeImg - 1;
        if(calcNewImg < 1) {
            calcNewImg  = galleryImg.length;
        }
    }

    newImg.setAttribute("src", "images/img-galleri/img" + calcNewImg + ".WebP");
    newImg.setAttribute("id", "current-img");


    /* Indeks for det nye åbnet billede */
    getLatestOpenedeImg = calcNewImg;


    /* ændrer knappen og positionen af knappen i forhold til det nye billede */
    newImg.onload = function () {
        let imgWidth = this.Width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 100;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let prevBtn = document.querySelector(".img-btn-next");
        prevBtn.style.cssText = "right-+: " + calcImgToEdge + "px;";
    }

}
