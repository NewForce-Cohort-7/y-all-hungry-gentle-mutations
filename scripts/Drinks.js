import { getDrinks, setDrinks } from "./dataAccess.js"

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
        return `<option value="${drink.id}" /> ${drink.name}</option>`


    })

    html += listItems.join("")

    html += "</select></br>"
    return html
}