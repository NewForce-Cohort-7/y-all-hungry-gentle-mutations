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


// set* functions 
export const setHotDogs = (id) => {
    database.orderBuilder.hotdogId = id;
    updateMenuDisplay();
}

export const setDrinks = (id) => {
    database.orderBuilder.drinkId = id;
    updateMenuDisplay();
}

export const setDesserts = (id) => {
    database.orderBuilder.dessertId = id;
    updateMenuDisplay();
}

// setLocation export  
export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const updateMenuDisplay = () => {
    console.log(database.orderBuilder);
    // document.querySelector("h2.hotdog").textContent = `hotdog id: ${database.orderBuilder.hotdogId}`;
    let orderHotdog = document.querySelector("h2.hotdog");
    let hotdogData = database.hotdogs.find((hotdog) => { return hotdog.id === database.orderBuilder.hotdogId });

    orderHotdog.innerHTML = `name: ${hotdogData.name} some img url: ${hotdogData.img}`;

    let orderDrink = document.querySelector("h2.drink");
    let drinkData = database.drinks.find((drink) => { return drink.id === database.orderBuilder.drinkId });

    orderDrink.innerHTML = `name: ${drinkData.name} some img url: ${drinkData.img}`;
    
}


// getLocation export 
export const getLocations = () => {
    return database.getLocations.map(f => ({ ...f }))
}

// orderBuilder
export const completeOrder = () => {

    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
