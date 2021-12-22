
/** Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes : 
* - nom(string)
* - lieu(string)
* - argent(number)
* - mainDroite(tableau)
* ( du coup main gauche(tableau))
* - seDeplacer(lieu)
* - payerArticle(article)
* - couper(ingredient, outil)
*/
let personne1 = {
    nom: "Calvin",
    lieu: "Maison",
    argent: 567,
    mainDroite : [],
    mainGauche : [],
    seDeplacer = (lieu) => {

    },
    payerArticle = (article) => {

    },
    couper = (ingredient, outil) => {

    },
}
/**
* Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
*/
let maison = {
    nom: 'Maison',
    personnes: [],
}
/**
* Créer un outil (couteau) pour découper les ingrédients achetés
* propriétés : nom et action.
* action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
*/
let couteau = {
    nom: "couteau",
    couper = (ingredient) => {
        console.log(`${ingredient.nom} est coupé en morceau  l'aide de ${this.nom}`)
        ingredient.etat = "coupé"
    }
}
/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etats ( entier,coupé, moulu), prix
 */
class Ingredients {
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let oignon = new Ingredients("oignon", "entier", 1.99)
let oeuf = new Ingredients("oeuf", "entier", 0.5)
let epices = new Ingredients("epices", "moulu", 1.30)
let fromage = new Ingredients("fromage", "entier", 4.79)
let poivron = new Ingredients("poivron", "entier", 0.75)
// Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
// Les "ingrédients" créés juste au dessus contenus dans un tableau.
let epicerie = {
    nom: "Epicerie",
    personnes: [],
    paniers: [
        {
            type: "panier1",
            contenu: [],
        },
        {
            type: "panier2",
            contenu: [],
        },
        {
            type: "panier3",
            contenu: [],
        }
    ],
    stock: [oignon, oeuf, epices, fromage, poivron]
}
/**
 * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
 * let
 */
let poele = {
    nom: "poele",
    contenu: [],
    cuire = () => {
        console.log(`${this.contenu[0].nom} est en train de cuire dans ${poele.nom}`)
        setTimeout(() => {
            this.contenu[0].etat = "cuit"
            console.log(`${this.contenu[0].nom} est cuit !`)
        }, 4000);
    }
}
// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]
let bol ={
    nom: "bol",
    contenu: [],
    melanger = (nomMelange) => {
        let newMelange = {
            nom:nomMelange,
            etat: "pas cuit",
        }
        this.contenu = newMelange
    }
}
/**** DEBUT DE L'OMELETTE ****/

// Pour dire que le personnage est à la maison :

// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :

// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie

// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)

// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 

// console.log(`${personnage.nom} a pris un ${type du panier}`);

// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage

// Afficher un message à chaque ingrédient pris

// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()

// Afficher un message de ce qu'il reste d'argent sur le personnage.

// rentrer à la maison (comme ça on pourra cuisiner)

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)

// Afficher un petit message de chaque ingrédient qu'on met dans le bol.

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)

// Afficher un petit message

// Retourner à la maison pour continuer l'omelette

// Afficher un petit message

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage

// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).

// Afficher un message avec le nouveau mélange

// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.

// Cuire l'omelette avec la méthode de la poele 

// Afficher un message final, notre omelette est cuite :)