import { getHotDogs, setHotDogs } from "./dataAccess.js"

const hotdogs = getHotDogs()

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
// database.orderBuilder.locationId
    // Use .map() for converting objects to <li> elements
    const listItems = hotdogs.map(hotdog => {
        return `<option value="${hotdog.id}" /> ${hotdog.name}</option>`


    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</select><br>"
    return html
}

/* 
const hotdogs = getHotDogs()
const ---- = getLocations()
const ---- = getHotdogLocations()

if(hotdog id = location id) then print only the hotdogs for that location 




*/