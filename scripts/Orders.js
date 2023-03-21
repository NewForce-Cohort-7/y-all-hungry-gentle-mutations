import { getHotDogs, getDrinks, getDesserts, getOrders, getLocations, getHappyToys } from "./dataAccess.js"

const hotdogs = getHotDogs()
const drinks = getDrinks()
const desserts = getDesserts()
const locations = getLocations()
const happyToys = getHappyToys()


const buildOrderListItem = (order) => {
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

    // const foundLocation = locations.find(
    //     (location) => {
    //         return location.id === order.locationId
    //     }
    // )


    // if (foundLocation === undefined) {
    //     window.alert("Please choose your location")
    //     location.reload()
    //     return
    // }

    let totalCost = 0
    if (foundHotdog && foundDrink && foundDessert && foundHappyToy) {
        totalCost = foundHotdog.price + foundDrink.price + foundDessert.price + foundHappyToy.price
    } 

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    <strong>Order #${order.id}:</strong> ${foundHotdog.name}, ${foundDrink.name}, ${foundDessert.name}, ${foundHappyToy.name} at our <u>placeholder</u> location. <strong>Total:</strong> ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}