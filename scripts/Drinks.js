import { getDrinks, setDrinks, getOrderBuilder, getDessertLocations, getDrinkLocations } from "./dataAccess.js"




const drinks = getDrinks()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "drink") {
            setDrinks(parseInt(event.target.value))
        }
    }
)

export const Drinks = () => {
    let html = "<select name='drink'><option value='menuChoice'>Select a drink</option>"

    const listItems = drinks.map(drink => {

    const DrinkLoc = getDrinkLocations()
    const Order = getOrderBuilder()
        
    for (const drinkObject of DrinkLoc) {
        if (Order.locationId === drinkObject.locationId) {

        if (drink.id === drinkObject.drinkId) {
            return `<option value="${drink.id}" /> ${drink.name}</option>`
            }
        }
    }
})

    html += listItems.join("")

    html += "</select></br>"
    return html
}