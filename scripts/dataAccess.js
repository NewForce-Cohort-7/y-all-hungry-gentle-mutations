import { database } from './database.js'

// get* functions
export const getHotDogs = () => {
    return database.hotdogs.map(hotdog => ({ ...hotdog }))
}

export const getDrinks = () => {
    return database.drinks.map(drink => ({ ...drink }))
}

export const getDesserts = () => {
    return database.desserts.map(dessert => ({ ...dessert }))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

// getLocation export 
export const getLocations = () => {
    return database.locations.map(location => ({ ...location }))
}


// set* functions 
export const setHotDogs = (id) => {
    database.orderBuilder.hotdogId = id;
    updateHotDogSelection();
}

export const setDrinks = (id) => {
    database.orderBuilder.drinkId = id;
    updateDrinkSelection();
}

export const setDesserts = (id) => {
    database.orderBuilder.dessertId = id;
    updateDessertSelection();
}

export const setLocations = (id) => {
    database.orderBuilder.locationId = id;
    updateLocation();
}

// // setLocation export  
// export const setLocationChoice = (locationId) => {
//     database.transientState.selectedLocation = locationId
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

// hot doggos
export const updateHotDogSelection = () => {
    console.log(database.orderBuilder);
    
    let orderHotdog = document.querySelector("span.hotdog");
    let hotdogData = database.hotdogs.find((hotdog) => { return hotdog.id === database.orderBuilder.hotdogId });

    orderHotdog.innerHTML = `<span>${hotdogData.name}</span>
    <p>${hotdogData.description}</p>`;

}

// drinks 
export const updateDrinkSelection = () => {
    console.log(database.orderBuilder);

    let orderDrink = document.querySelector("span.drink");
    let drinkData = database.drinks.find((drink) => { return drink.id === database.orderBuilder.drinkId });

    orderDrink.innerHTML = `<p>${drinkData.name}</p>`;

}

// dessert 
export const updateDessertSelection = () => {
    console.log(database.orderBuilder);

    let orderDessert = document.querySelector("span.dessert");
    let dessertData = database.desserts.find((dessert) => { return dessert.id === database.orderBuilder.dessertId });

    orderDessert.innerHTML = `<span>${dessertData.name}</span>
    <p>${dessertData.description}</p> `;   
}

// location selection 
export const updateLocation = () => {
    console.log(database.orderBuilder);
    
    let locationOption = document.querySelector(".locationName");
    let locationData = database.locations.find((location) => { return location.id === database.orderBuilder.locationId });

    locationOption.innerHTML = `
    You have selected our <strong>${locationData.name}</strong> foodtruck located at </br> ${locationData.address}.
    
    `  
}

// orderBuilder
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length 
    newOrder.id = lastIndex + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
