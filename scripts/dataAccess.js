import { database } from './database.js'

// get* functions
export const getHotDogs = () => {
    return database.hotdogs.map(hotdog => ({...hotdog}))
}

export const getDrinks = () => {
    return database.drinks.map(drink => ({...drink}))
}

export const getDesserts = () => {
    return database.desserts.map(dessert => ({...dessert}))
}


// set* functions 
export const setHotDogs = (id) => {
    database.orderBuilder.metalId = id
}

export const setDrinks = (id) => {
    database.orderBuilder.drinkId = id 
}

export const setDesserts = (id) => {
    database.orderBuilder.dessertId = id
}

// setLocation export  
export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}


// getLocation export 
export const getLocations = () => {
    return database.getLocations.map(f => ({...f}))
}

// orderBuilder
export const completeOrder = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
