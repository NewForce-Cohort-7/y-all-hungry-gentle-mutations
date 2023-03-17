import { getDrinks, setDrinks } from "./dataAccess.js"

const drinks = getDrinks()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "style") {
//             window.alert(`User chose style ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "drinks") {
            setDrinks(parseInt(event.target.value))
        }
    }
)

export const Drinks = () => {
    let html = "<select name='drinks'><option value='menuChoice'>Select a drink</option>"

    // Use .map() for converting objects to <li> elements
    const listItems = drinks.map(drink => {
        return `<option value="${drink.id}" /> ${drink.name}</option>`


    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</select></br>"
    return html
}