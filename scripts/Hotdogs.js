import { getHotDogs, setHotDogs } from "./dataAccess.js"

const hotdogs = getHotDogs()

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
        console.log("Change event from hotdog listener");
        console.log(event);
        if (event.target.name === "hotdogs") {
            console.log("setting hot dog...");
            setHotDogs(parseInt(event.target.value));
        }
    }
)

export const HotDogs = () => {
    let html = "<select name='hotdogs'><option value='menuChoice'>Select a hotdog</option>"

    // Use .map() for converting objects to <li> elements
    const listItems = hotdogs.map(hotdog => {
        return `<option value="${hotdog.id}" /> ${hotdog.name}</option>`


    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</select></br>"
    return html
}