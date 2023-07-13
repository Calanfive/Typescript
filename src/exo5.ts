import { log } from "console";

export const exo5 = () => {

    let distance_parcourue = 0 
    let wagons=[]

    for (let index = 3; index <= 12; index+=1) {
        wagons.push(index);
    }
    console.log(wagons);

    let nbpassagers = wagons.map((numwagon, index) => {
        return numwagon*3
    });
    // console.log("Au départ, le nombre de passagers dans chaque wagon est ", nbpassagers);
    
    let vitesse=92

    let  nbPassagerTotal = 0

    nbpassagers.forEach((element) => {
        nbPassagerTotal=nbPassagerTotal+element
        console.log(nbPassagerTotal);
    });

    for (let minute = 0; minute < nbPassagerTotal; minute++) {
  
        let wagonaléatoire = Math.floor(Math.random()*nbpassagers.length)
        // console.log("Le wagon "+wagonaléatoire+" perd un passager");
        nbpassagers[wagonaléatoire] = nbpassagers[wagonaléatoire]-1

        console.log("Le nombre de passagers dans chaque wagon est ", nbpassagers);

        distance_parcourue += vitesse/60
        console.log("Le train a parcouru "+distance_parcourue+" kms");
        distance_parcourue = distance_parcourue*nbPassagerTotal

        if (nbpassagers[wagonaléatoire] === 0) {
            nbpassagers = nbpassagers.filter( (element) => {
                return element>0
            })
            console.log("Reste ", nbpassagers , "passagers à bord" );  

            vitesse=vitesse+10
            console.log("Le train de l'enfer continue d'accélerer. Sa vitesse a atteint les "+ vitesse +" kms");
        }

    console.log("Le train a parcouru "+distance_parcourue+" kms");

    }    

}