import { getHotDogs, setHotDogs, addCustomOrder, getHotDogLocations } from "./dataAccess.js"

const hotdogs = getHotDogs()
const hotdogIds = setHotDogs()
const orders = addCustomOrder()
const hotdogLocations = getHotDogLocations()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "hotdogs") {
            setHotDogs(parseInt(event.target.value))
        }
    }
)

export const Hotdogs = () => {
    let html = "<select name='hotdogs'><option value='menuChoice'>Select a hotdog</option>"

    const listItems = hotdogs.map(hotdog => {
        return `<option value="${matchingHotdogs.id}" /> ${matchingHotdogs.name}</option>`


    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</select><br>"
    return html
}
