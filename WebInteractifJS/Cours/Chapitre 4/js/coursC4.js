//Modifie la couleur et les marges du premier paragraphe
var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";

//Affiche les couleurs des trois paragraphes
var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color); // Affiche "red"
console.log(paragraphesElts[1].style.color); // Affiche "green"
console.log(paragraphesElts[2].style.color); // N'affiche rien car modifié dans un fichier extérieur

//Permet d'avoir le style d'un noeud du DOM
var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB



