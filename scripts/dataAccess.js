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

// setLocation export  
export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const updateHotDogSelection = () => {
    console.log(database.orderBuilder);
    // document.querySelector("h2.hotdog").textContent = `hotdog id: ${database.orderBuilder.hotdogId}`;
    // hot doggos
    let orderHotdog = document.querySelector("h2.hotdog");
    let hotdogData = database.hotdogs.find((hotdog) => { return hotdog.id === database.orderBuilder.hotdogId });

    orderHotdog.innerHTML = `name: ${hotdogData.name} some img url: ${hotdogData.img}`;

}

export const updateDrinkSelection = () => {
    console.log(database.orderBuilder);
    // drinks 
    let orderDrink = document.querySelector("h2.drink");
    let drinkData = database.drinks.find((drink) => { return drink.id === database.orderBuilder.drinkId });

    orderDrink.innerHTML = `name: ${drinkData.name} some img url: ${drinkData.img}`;
}
    
export const updateDessertSelection = () => {
    let orderDessert = document.querySelector("h2.dessert");
    let dessertData = database.desserts.find((dessert) => { return dessert.id === database.orderBuilder.dessertId });

    orderDessert.innerHTML = `name: ${dessertData.name} some img url: ${dessertData.img}`;   
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
