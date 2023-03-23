import { getLocations, setLocations, getOrderBuilder } from "./dataAccess.js"

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

    const listItems = locations.map(location => {

        const currentLocation = getOrderBuilder()

        if (currentLocation.locationId == location.id) {
            return `<option value="${location.id}" selected /> ${location.name}</option>` 
        } else {
            return `<option value="${location.id}" /> ${location.name}</option>`
    }
    })

    html += listItems.join("")

    html += "</select>"
    return html
}