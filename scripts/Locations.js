import { getLocations, setLocations} from "./dataAccess.js"

const locations = getLocations()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "location") {
            setLocations(parseInt(event.target.value))
        }
    }
)

export const Locations = () => {
    let html = "<select name='location'><option value='menuChoice'>Select a location</option>"

    // Use .map() for converting objects to <li> elements
    const listItems = locations.map(location => {
        return `<option value="${location.id}" /> ${location.name}</option>`


    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</select>"
    return html
}