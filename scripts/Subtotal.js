import { getHotDogs, getDrinks, getDesserts, getOrders, getHappyToys } from "./dataAccess.js"

const hotdogs = getHotDogs()
const drinks = getDrinks()
const desserts = getDesserts()
const happyToys = getHappyToys()


const buildSubtotal = (order) => {
    const foundHotdog = hotdogs.find(
        (hotdog) => {
            return hotdog.id === order.hotdogId
        }
    )
    
    const foundDrink = drinks.find(
        (drink) => {
            return drink.id === order.drinkId
        }
    )

    const foundDessert = desserts.find(
        (dessert) => {
            return dessert.id === order.dessertId
        }
    )
    
    const foundHappyToy = happyToys.find(
        (toy) => {
            return toy.id === order.toyId
        }
    )

    let totalCost = 0
    if (foundHotdog && foundDrink && foundDessert && foundHappyToy) {
        totalCost = foundHotdog.price + foundDrink.price + foundDessert.price + foundHappyToy.price
    } 

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
   ${costString}
    </li>`
}

export const Subtotal = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildSubtotal)

    html += listItems.join("")
    html += "</ul>"

    return html
}
