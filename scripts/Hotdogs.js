import { getHotDogs, setHotDogs, addCustomOrder, getHotDogLocations } from "./dataAccess.js"

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

    // Use .map() for converting objects to <li> elements
    const listItems = hotdogs.map(hotdog => {
        return `<option value="${hotdog.id}" /> ${hotdog.name}</option>`


    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</select><br>"
    return html
}

import {}


// Things we need :
    // access to transient state -- orderbuilder
    // access to the bridge table -- getFoodLocations
    // access to the foods table -- getFoods
// when state has a locationId we need to filter the foods dropdown
// location id => filter bridge table for foods at selected location => make a list of those foods
// need conditional to see if state.locationId === bridge.locationId
    // prob want to make a new array with only those objects
// find food item and make array of corresponding food items
    //could use a loop or .map prob gonna need .find
    // you need to find a list of bridgetable objects with only that location
    // change bridge.foodId to objects
    // print select items

//     import { getWalkers, getCities, getWalkerCities } from "./database.js"

// const allWalkerCities = getWalkerCities();
// const walkers = getWalkers()

// export const Walkers = () => {
//     let walkerHTML = "<ul>"

//     for (const walker of walkers) {
//         walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
//     }

//     walkerHTML += "</ul>"
    
//     return walkerHTML

// }

// // The function need the walker information, so define a parameter
// const filterWalkerCitiesByWalker = (walkerId) => {
//     let arrWalkerCities = [];

//     // Iterate the array value of walkerCities
//     for (let walkerCityObjects of allWalkerCities) {
//         // Check if the primary key of the walker equals the foreign key on the assignment
//         if (walkerCityObjects.walkerId === parseInt(walkerId)) {
//         // If it does, add the current object to the array of assignments
//             arrWalkerCities.push(walkerCityObjects)
//         }
//     }
//     // After the loop is done, return the assignments array
//     return arrWalkerCities   
// }


// const allCities = getCities();

// // Define a function that builds a string of city names. Needs a paramter for assignments array.
// const assignedCityNames = (matchingCities) => {
//     // Define an empty string that will get appended with matching cities
//     let emptyCityString = ""

//     // Iterate the array of assignment objects
//     for (let matchedObject of matchingCities) {
//         // For each assignment, iterate the cities array to find the match
//         for(const aCity of allCities) {
//             if (aCity.id === matchedObject.cityId) {
//                 // Add the name of the matching city to the array of city names
//                 emptyCityString += `${aCity.name} `
//             }
//         }

//     }

//     // After the loop is done, return the string
// return emptyCityString

// }


// document.addEventListener(
//     "click",  // This is the type of event
//     (clickEvent) => {

//         const itemClicked = clickEvent.target


//         if (itemClicked.id.startsWith("walker")) {

//             const [,walkerId] = itemClicked.id.split("--")

  
//             for (const walkerObject of walkers) {

//                 if (walkerObject.id === parseInt(walkerId)) {
                    
                    
//                     const assignments = filterWalkerCitiesByWalker(walkerId)
//                     const cities = assignedCityNames(assignments)
                    
                    
//                     window.alert(`${walkerObject.name} services ${cities}`)
//                 }
//             }
//         }
//     }
// )

