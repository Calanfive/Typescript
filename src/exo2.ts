export const exo2 = () => {


    //const tableau = [1,2,3,4,5,6,7,8,9,10]

    let tableau = [];

    for (let index = 0; index < 10 ; index++) {     
        tableau[index] = index + 1;
        console.log("tableau[%d]=%d", index, index+1)
    
    }

console.log("mon tableau :", tableau);
console.log("La longueur du tableau est :" , tableau.length);
console.log("Le premier élément du tableau est :", tableau[0]);
console.log("Le dernier élément du tableau est :", tableau[9]);
console.log("Le 4eme élement du tableau est :", tableau[3]);

let Tableaubis=[]

    for (let index = 0; index < tableau.length; index++) {
        Tableaubis[index] = tableau[index]*2;

    }

console.log("mon tableaubis :", Tableaubis);


}