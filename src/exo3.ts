export const exo3 = () => {
    function avoirNbreStockFoin(stockInitialFoin: number, nbMouton: number){
        let nbremoutons = nbMouton
        let stock = stockInitialFoin
        let jour = 0
        const consojour1mout = 0.25
        const jourturn = 1000
    
        console.log("Le stock de foin est de " + stock + "kg  le premier jour");
    
        while (stock > 0 ) {
            stock = stock - (consojour1mout*nbremoutons) ;
            
            if (jour === jourturn - 1) {
                nbremoutons = nbremoutons - 1
            }
    
            jour = jour + 1
    
        }
        console.log("le stock de foin a duré " + jour + "jours" );
    }

    avoirNbreStockFoin(800, 2)
    avoirNbreStockFoin(20, 2)
    avoirNbreStockFoin(800, 5)

    for (let stockInit = 0; stockInit < 1000; stockInit++) {
        avoirNbreStockFoin(stockInit, 3)
        
    }
    
}