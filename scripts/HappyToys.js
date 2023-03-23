import { getHappyToys, setHappyToys, getOrderBuilder, getToyLocations, getOrders } from "./dataAccess.js"

const toys = getHappyToys()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "toy") {
            setHappyToys(parseInt(event.target.value))
        }
    }
)

export const Toys = () => {
    let html = "<select name='toy'><option value='menuChoice'>Select a toy</option>"

    const listItems = toys.map(toy => {

    const toyLoc = getToyLocations()
    const Order = getOrderBuilder()
    const currentDisplayedOrders = getOrders()
    let toysSold = []
    
    for (const happyToyObject of toyLoc) {
        if (Order.locationId === happyToyObject.locationId) {

            toysSold = currentDisplayedOrders.filter(numberOfToysSold => numberOfToysSold.locationId === happyToyObject.locationId && numberOfToysSold.toyId === happyToyObject.toyId)

        if (toy.id === happyToyObject.toyId) {
            return `<option value="${toy.id}" /> ${toy.name} (${happyToyObject.quantity - toysSold.length} in stock)</option>`
        }
    }
  }
 })

    html += listItems.join("")

    html += "</select></br>"
    return html
}