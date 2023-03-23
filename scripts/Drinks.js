import { getDrinks, setDrinks, getOrderBuilder, getDrinkLocations, getOrders } from "./dataAccess.js"

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
    const currentDisplayedOrders = getOrders()
    let drinksSold = []
        
    for (const drinkObject of DrinkLoc) {
        
    if (Order.locationId === drinkObject.locationId) {

        // the array method
        drinksSold = currentDisplayedOrders.filter(numberOfDrinksSold => numberOfDrinksSold.locationId === drinkObject.locationId && numberOfDrinksSold.drinkId === drinkObject.drinkId)
        
        
        // the long hand form
        // const numberOfDrinksSold = () => {
        //     for (const singleDisplayedOrder of currentDisplayedOrders){
        //         if(singleDisplayedOrder.locationId === drinkObject.locationId && singleDisplayedOrder.drinkId === drinkObject.drinkId){
        //             drinksSold.push(singleDisplayedOrder)
        //         }
        //     }
        // } 
        // numberOfDrinksSold()

        if (drink.id === drinkObject.drinkId) {
            return `<option value="${drink.id}" /> ${drink.name} (${drinkObject.quantity - drinksSold.length} in stock)</option>`
            }
        }
    }
})

    html += listItems.join("")

    html += "</select></br>"
    return html
}