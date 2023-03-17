import { getDesserts, setDesserts } from "./dataAccess.js"

const desserts = getDesserts()

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
        if (event.target.name === "desserts") {
            setDesserts(parseInt(event.target.value))
        }
    }
)

export const Desserts = () => {
    let html = "<select name='desserts'><option value='menuChoice'>Select a dessert</option>"

    // Use .map() for converting objects to <li> elements
    const listItems = desserts.map(dessert => {
        return `<option value="${dessert.id}" /> ${dessert.name}</option>`


    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</select>"
    return html
}