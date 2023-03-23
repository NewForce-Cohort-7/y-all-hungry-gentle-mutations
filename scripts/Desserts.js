import { getDesserts, setDesserts, getOrderBuilder, getDessertLocations, getOrders } from "./dataAccess.js"
// access to transient state - orderBuilder
// access to the bridge table - getDessertLocations
// access to the desserts table - getDesserts

const desserts = getDesserts()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "dessert") {
            setDesserts(parseInt(event.target.value))
        }
    }
)

export const Desserts = () => {
    let html = "<select name='dessert'><option value='menuChoice'>Select a dessert</option>"

    const listItems = desserts.map(dessert => {

    const DessertLoc = getDessertLocations() // dessert locations/stock
    const Order = getOrderBuilder() // transient state
    const currentDisplayedOrders = getOrders()
    let dessertsSold = []
        
   
    for (const dessertObject of DessertLoc) { // make a new array with just those objects - for loop/.map()/.find
        if (Order.locationId === dessertObject.locationId ) {  // need conditional to see if orderBuilder.locationId === dessertLocations.locationId

        // quantity decrementing using array method 
        dessertsSold = currentDisplayedOrders.filter(numberOfDessertsSold => numberOfDessertsSold.locationId === dessertObject.locationId && numberOfDessertsSold.dessertId === dessertObject.dessertId)
     
        if (dessert.id === dessertObject.dessertId) { // another to loop through desserts & find dessert name that matches dessertId on dessertObject 
                return `<option value="${dessert.id}" /> ${dessert.name} (${dessertObject.quantity - dessertsSold.length} in stock)</option>` // print selected items
            }
        }   
    }
})

    html += listItems.join("")

    html += "</select></br>"
    return html
}