export function melanger(nomMelange, self){
    console.log(this);
    let newMelange = {
        nom: nomMelange,
        etat: "pas cuit",
    }
    this.contenu = [newMelange]
}

export function couper(ingredient){
    console.log(`${ingredient.nom} est coupé en morceau  l'aide de ${this.nom}`)
    ingredient.etat = "coupé"
}

export function cuire(){
    console.log(`${this.contenu[0].nom} est en train de cuire dans ${poele.nom}`)
    setTimeout(() => {
        this.contenu[0].etat = "cuit"
        console.log(`${this.contenu[0].nom} est cuit !`)
    }, 4000);
}