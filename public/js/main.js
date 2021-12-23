

import { Personnes } from "./class.js";
import { Lieux } from "./class.js";
import { Magasins } from "./class.js";
import { Contenants } from "./class.js";
import { Ingredients } from "./class.js";
import { melanger } from "./function.js";
import { cuire } from "./function.js";
import { couper } from "./function.js";

let personne1 = new Personnes("Calvin", "Maison", 567, [], [])

let oignon = new Ingredients("oignon", "entier", 1.99)
let oeuf = new Ingredients("oeuf", "entier", 0.5)
let epices = new Ingredients("epices", "moulu", 1.30)
let fromage = new Ingredients("fromage", "entier", 4.79)
let poivron = new Ingredients("poivron", "entier", 0.75)

let maison = new Lieux("maison", [])
let epicerie = new Magasins("epicerie", [],[{type: "panier1",contenu: [],}, {type: "panier2", contenu: [],},{type: "panier3",contenu: [],}], [oignon, oeuf, epices, fromage, poivron] )

let bol = new Contenants("bol", [], melanger);
let poele = new Contenants("poele", [], cuire)

let couteau = {
    nom: "couteau",
    couper
}
/**** DEBUT DE L'OMELETTE ****/

// Pour dire que le personnage est à la maison :
// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :
// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);
personne1.seDeplacer(maison, maison)
// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie
personne1.seDeplacer(maison, epicerie)
// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)
personne1.mainDroite.push(epicerie.paniers[0])
epicerie.paniers.splice(epicerie.paniers[0], 1)
// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 
console.log (epicerie.paniers)
console.log (personne1)
// console.log(`${personnage.nom} a pris un ${type du panier}`);
console.log(`${personne1.nom} a pris un ${personne1.mainDroite[0].type}`)
// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
// Afficher un message à chaque ingrédient pris
epicerie.stock.forEach(element => {
    personne1.mainDroite[0].contenu.push(element)
    console.log(`${personne1.nom} met ${element.nom} dans son ${personne1.mainDroite[0].type}`)
});
console.log(personne1.mainDroite)
// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
personne1.mainDroite[0].contenu.forEach(element => {
    personne1.payerArticle(element)
});
// Afficher un message de ce qu'il reste d'argent sur le personnage.
personne1.argent = Number(personne1.argent.toFixed(2))
console.log(personne1.mainDroite[0].contenu)
console.log(personne1.argent)
// rentrer à la maison (comme ça on pourra cuisiner)
personne1.seDeplacer(epicerie, maison)
// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)
// Afficher un petit message de chaque ingrédient qu'on met dans le bol.
personne1.mainDroite[0].contenu.forEach(element => {
    bol.contenu.push(element)
    console.log(`${personne1.nom} met ${element.nom} dans ${bol.nom}`)
});
// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)
for (let i = 0; i < personne1.mainDroite[0].contenu.length; i++) {
    const element = personne1.mainDroite[0].contenu[i];
    personne1.mainDroite[0].contenu.splice(i, 1); 
    i--
}
console.log(bol)
console.log(personne1.mainDroite[0].contenu)
// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
personne1.seDeplacer(maison, epicerie)
epicerie.paniers.push(personne1.mainDroite[0])
personne1.mainDroite.splice(0, 1)
// Afficher un petit message
console.log(`${personne1.nom} a redéposé son ${epicerie.paniers[0].type}`)
// Retourner à la maison pour continuer l'omelette
// Afficher un petit message
console.log(`${personne1.nom} repart de ${epicerie.nom} pour aller à la ${maison.nom}`)
personne1.seDeplacer(epicerie, maison)
// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage
for (let i = 0; i < bol.contenu.length; i++) {
    const element = bol.contenu[i];
    if (element.etat !== "coupé" && element.etat !== "moulu") {
        console.log(`${personne1.nom} découpe ${element.nom} avec ${couteau.nom}`)
        personne1.couper(element, couteau)
    } else {
        console.log(`le ${element.nom} n'a pas besoin d'être coupé`)
    }
}
console.log(bol.contenu)
// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).
console.log(`${personne1.nom} mélange ${bol.contenu}`)
bol.action("omelette", bol)
// Afficher un message avec le nouveau mélange
console.log(`${personne1.nom} obtient une ${bol.contenu.nom} ${bol.contenu.etat}`)
// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.
poele.contenu.push(bol.contenu[0])
console.log(`${personne1.nom} verse ${bol.contenu[0].nom} dans ${poele.nom}`)
bol.contenu.splice(0, 1)
console.log(bol)
console.log(poele)
// Cuire l'omelette avec la méthode de la poele 
poele.action()
// Afficher un message final, notre omelette est cuite :)