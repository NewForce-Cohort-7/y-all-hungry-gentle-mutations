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

    orderHotdog.textContent = hotdogData.name;
    orderHotdog.innerHTML += `some img url: ${hotdogData.img}`;
    // document.querySelector("h2.drink").textContent = database.drinks.find((drink) => { return drink.id === database.orderBuilder.drinkId })?.name ?? "drink";

    // console.log(document.querySelector("h2.dessert"));
    // document.querySelector("h2.dessert").textContent = database.desserts.find((dessert) => { return dessert.id === database.orderBuilder.dessertId })?.name ?? "dessert";
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
