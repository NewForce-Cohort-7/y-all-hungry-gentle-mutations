const database = {
    transientState: {},
    hotdogs: [
        {id: 1, name: "Triple-H Dog", price: 300},
        {id: 2, name: "Footlong", price: 300},
        {id: 3, name: "Corn Dawg", price: 300},
        {id: 4, name: "Bratwurst", price: 300},
        {id: 5, name: "Corndog", price: 300},
    ],
    drinks: [
        {id: 1, name: "Mountain Dew", price: 300},
        {id: 2, name: "Sprite", price: 300},
        {id: 3, name: "Coke", price: 300},
        {id: 4, name: "Sweet Tea", price: 300},
        {id: 5, name: "Blackberry Lemonade", price: 300},
        {id: 6, name: "Water", price: 300},
    ],
    
}

export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getLocations = () => {
    return database.getLocations.map(f => ({...f}))
}

export const completeOrder = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
