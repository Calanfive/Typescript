export const exo4 = () => {

  const candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
  let votes = [0,0,0,0,0,0,0];


  const nb_electeurs = 1000;

  for (let electeur = 0; electeur < nb_electeurs; electeur++) {
      const numero_candidat = Math.floor(Math.random() * candidats.length);
      // console.log("numéro candidat tiré :", numero_candidat);
      // console.log("candidat pour lequel on vient de voter :", candidats[numero_candidat]);
      votes[numero_candidat]++;
  }

  
  // console.log("Les votes sont :", votes);
  console.log("Résultats du 1er tour :")

  for (let position = 0; position < candidats.length; position++) {
       const RESULTAT = candidats[position];
       console.log(RESULTAT, votes[position]);
  }

  const nb_votemax = Math.max(...votes);
  
  // trouver le nom du candidat avec vote = votes max
  let qualifies: string[] = []

  for (let index = 0; index < votes.length; index++) {
    if (votes[index] === nb_votemax){
      qualifies.push(candidats[index])    
    }
    
  }

  for (let index = 0; index < qualifies.length; index++) {
    console.log("Le(s) vainqueur(s) du 1er tour est : ", qualifies[index]);
  }
  
  if (qualifies[nb_votemax].length < 1){
  // création tableau réduit sans nb_votemax
    const tableauRéduit : number[] = []
    for (let positionTR = 0; positionTR < votes.length; positionTR++) {
      if (votes[positionTR] < nb_votemax){
        tableauRéduit.push(votes[positionTR])
      }
    }
    console.log(tableauRéduit);

    const second_votemax = Math.max(...tableauRéduit);

    for (let index = 0; index < votes.length; index++) {
      if (votes[index] === second_votemax){
        qualifies.push(candidats[index])    
      }
    }    

  }

  console.log(qualifies.length);

  
}
