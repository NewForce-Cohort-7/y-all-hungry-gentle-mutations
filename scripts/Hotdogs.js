import { getHotDogs, setHotDogs, addCustomOrder, getHotDogLocations } from "./dataAccess.js"

const hotdogs = getHotDogs()
const hotdogIds = setHotDogs()
const orders = addCustomOrder()
const hotdogLocations = getHotDogLocations()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "hotdogs") {
            setHotDogs(parseInt(event.target.value))
        }
    }
)

export const Hotdogs = () => {
    let html = "<select name='hotdogs'><option value='menuChoice'>Select a hotdog</option>"

    let matchingHotdogs = [];

    for(let hotdogLocation of hotdogLocations) {
        for(let hotdog of hotdogs) {
            if (hotdogLocation.locationId === hotdog.id)
    console.log(matchingHotdogs)      
    return matchingHotdogs
        }    
    }

    // loop through hotdoglocations
    // locationId matches order, only Id's that match location
    const listItems = hotdogs.map(hotdog => {
        return `<option value="${matchingHotdogs.id}" /> ${matchingHotdogs.name}</option>`


    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</select><br>"
    return html
}


// Things we need :
    // access to transient state -- orderbuilder
    // access to the bridge table -- getFoodLocations
    // access to the foods table -- getFoods
// when state has a locationId we need to filter the foods dropdown
// location id => filter bridge table for foods at selected location => make a list of those foods
// need conditional to see if state.locationId === bridge.locationId
    // prob want to make a new array with only those objects
// find food item and make array of corresponding food items
    //could use a loop or .map prob gonna need .find
    // you need to find a list of bridgetable objects with only that location
    // change bridge.foodId to objects
    // print select items

    // export const Hotdogs = (matchingHotdogs) => {
    //     let html = "<select name='hotdogs'><option value='menuChoice'>Select a hotdog</option>"
    
    //     const listItems = hotdogs.map(hotdog => {
    //         return `<option value="${hotdog.id}" /> ${hotdog.name}</option>`
    
    
    //     })
    
    //     // Join all of the strings in the array into a single string
    //     html += listItems.join("")
    
    //     html += "</select><br>"
    //     return html
    // }

    