import {calcAverageProductPrice, Product} from './products'

interface InventoryItem {

    product: Product;
    quantity: number;
}


let inventory: InventoryItem[] = [

    {   product: {name:"motor", price: 10.00},
        quantity: 10                },
    
    {   product: {name:"sensor", price: 12.50},
        quantity: 4                },
    
    {   product: {name:"LED", price: 1.00},
        quantity: 20                }
    ];

   export const calcInventoryValue = (inventoryArray: InventoryItem[]):number =>{
        let total = 0
        for(let i= 0; i<=inventoryArray.length; i++){
             total =  inventoryArray[i].product.price * inventoryArray[i].quantity
             
        } console.log(total)
          return total 
    }

  calcInventoryValue(inventory)