export interface Product {
    name: string;
    price: number;
}

let products: Product[] = [

    {   name: "Cheese Pizza",
        price: 8.99, },
    
    {   name: "Bacon Pizza",
        price: 9.99, },
    
    {   name: "Veggie Pizza",
        price: 10.99, }
    ]


export const calcAverageProductPrice = (prodArray: Product[]):number =>{

        let total = 0;

        // if(prodArray = []){
        //     return 0
        // }

            for(let item of prodArray){
                total += item.price;
            }  
        let avaeragePrice =  total/prodArray.length;
        console.log(avaeragePrice)
        return avaeragePrice 
    }
calcAverageProductPrice(products)
