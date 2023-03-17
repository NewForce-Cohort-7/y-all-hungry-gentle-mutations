import { getDesserts, setDesserts } from "./dataAccess.js"

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
        return `<option value="${dessert.id}" /> ${dessert.name}</option>`


    })

    html += listItems.join("")

    html += "</select></br>"
    return html
}