import { getHotDogs, setHotDogs, getOrderBuilder, getHotdogLocations } from "./dataAccess.js"

const hotdogs = getHotDogs()

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

    const listItems = hotdogs.map(hotdog => {

    const HotdogLocation = getHotdogLocations() // dessert locations/stock
    const Order = getOrderBuilder() // transient state
        for (const hotdogObject of HotdogLocation) {
        if (Order.locationId === hotdogObject.locationId ) {  // need conditional to see if orderBuilder.locationId === dessertLocations.locationId
            
        if (hotdog.id === hotdogObject.hotdogId) { // another to loop through desserts & find dessert name that matches dessertId on dessertObject 
                return `<option value="${hotdog.id}" /> ${hotdog.name} (${hotdogObject.quantity} in stock)</option>` // print selected items
            }
        } 
    
    }
})

    html += listItems.join("")

    html += "</select></br>"
    return html
}