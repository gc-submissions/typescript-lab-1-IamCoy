export interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [

{   name: "kilimanjaro",
    height: 19341, },

{   name: "Everest",
    height: 29029, },

{   name: "Denali",
    height: 20310, }
]

export const findNameOfTallestMountain = (mountainArray: Mountain[]): string =>{
    let tallestMountain = mountainArray[0]
    for (let tallest of mountainArray){
        if(tallest.height > tallestMountain.height){
            tallestMountain = tallest
        }
    } let theTallest =  tallestMountain.name
        console.log(theTallest)
        return theTallest
}  

findNameOfTallestMountain(mountains)

