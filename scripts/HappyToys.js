import { getHappyToys, setHappyToys } from "./dataAccess.js"

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
        return `<option value="${toy.id}" /> ${toy.name}</option>`
    })

    html += listItems.join("")

    html += "</select></br>"
    return html
}