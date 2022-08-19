//declare variables
const myGallery = document.getElementById("app");

//create elements
const myFig = document.createElement('figure');     
const myH = document.createElement('h2');
const myImg = document.createElement('img');
const myP = document.createElement('p');

//appending
myFig.appendChild(myGallery);
myH.appendChild(myFig);
myImg.appendChild(myFig);
myP.appendChild(myFig);

//make a card gallery
buildCard (myFig);

function buildCard (myHeadline, myUrl, myDescription) {

    //add needed elements
        const myCard = document.createElement('figure');
        const cardHeadline = document.createElement('h2');
        const cardImage = document.createElement('img');
        const cardDescription = document.createElement('p');
    
    //clear gallery html
        myGallery.innerHTML = "";
    
    //assign elements corresponding values
        cardHeadline.innerText = myHeadline;
        cardImage.src = myUrl;
        cardDescription.innerText = myDescription;
    
    //
        myCard.appendChild(cardHeadline);
        myCard.appendChild(cardImage);
        myCard.appendChild(cardDescription);
    
    //
        myGallery.appendChild(myCard);
    }
    