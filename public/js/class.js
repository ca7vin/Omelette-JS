export class Ingredients {
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

export class Personnes{
    constructor(nom, lieu, argent, mainDroite, mainGauche) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
    }
    seDeplacer(depart, arrivee){
        depart.personnes.splice(depart.personnes.indexOf(this), 1);
        arrivee.personnes.push(this);
        console.log(`${this.nom} est actuellement à ${arrivee.nom}`);
    }
    payerArticle(article){
        this.argent = this.argent - article.prix
        console.log(`${this.nom} achète du ${article.nom} pour ${article.prix}`);
    }
    couper(ingredient, outil){
        outil.couper(ingredient)
    }
}

export class Lieux{
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

export class Magasins extends Lieux{
    constructor(nom, personnes, paniers, stock ){
        super(nom, personnes);
        this.paniers = paniers;
        this.stock = stock;
    }
}

export class Contenants{
    constructor(nom, contenu, action){
        this.nom = nom;
        this.contenu = contenu;
        this.action = action;
        this.action = this.action.bind(this);
    }
}