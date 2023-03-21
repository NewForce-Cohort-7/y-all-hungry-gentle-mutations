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

export const getHappyToys = () => {
    return database.happyToys.map(toy => ({ ...toy }))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const getOrderBuilder = () => {
    return database.orderBuilder
}

// bridge tables
export const getHotdogLocations = () => {
    return database.hotdogLocations.map(hotdogloc => ({...hotdogloc}))
}

export const getDrinkLocations = () => {
    return database.drinkLocations.map(drinkloc => ({...drinkloc}))
}

export const getDessertLocations = () => {
    return database.dessertLocations.map(dessertloc => ({...dessertloc}))
}

export const getToyLocations = () => {
    return database.happyToysLocations.map(toyloc => ({...toyloc}))
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
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setHappyToys = (id) => {
    database.orderBuilder.toyId = id;
    updateToySelection();
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

    orderHotdog.innerHTML = `
    <div class="card mb-3 food-card" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
        <img src="${hotdogData.img}" class="img-fluid rounded-start" alt="photo of selected hotdog">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${hotdogData.name}</h5>
            <p class="card-text">${hotdogData.description}</p>
            <p class="card-text"><small class="text-muted">$${hotdogData.price}</small></p>
        </div>
        </div>
    </div>
    </div>`;

}

// drinks 
export const updateDrinkSelection = () => {
    console.log(database.orderBuilder);

    let orderDrink = document.querySelector("span.drink");
    let drinkData = database.drinks.find((drink) => { return drink.id === database.orderBuilder.drinkId });

    orderDrink.innerHTML = `
    <div class="card mb-3 food-card" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
        <img src="${drinkData.img}" class="img-fluid rounded-start" alt="photo of selected beverage">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${drinkData.name}</h5>
            <p class="card-text">${drinkData.description}</p>
            <p class="card-text"><small class="text-muted">$${drinkData.price}</small></p>
        </div>
        </div>
    </div>
    </div>`;

}

// dessert 
export const updateDessertSelection = () => {
    console.log(database.orderBuilder);

    let orderDessert = document.querySelector("span.dessert");
    let dessertData = database.desserts.find((dessert) => { return dessert.id === database.orderBuilder.dessertId });

    orderDessert.innerHTML = `
    <div class="card mb-3 food-card" style="max-width: 540px;">
    <div class="row g-0" background-color: >
        <div class="col-md-4 food-card">
        <img src="${dessertData.img}" class="img-fluid rounded-start" alt="photo of selected dessert">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${dessertData.name}</h5>
            <p class="card-text">${dessertData.description}</p>
            <p class="card-text"><small class="text-muted">$${dessertData.price}</small></p>
        </div>
        </div>
    </div>
    </div>`;   
}

// happy toys
export const updateToySelection = () => {
    console.log(database.orderBuilder);

    let orderToy = document.querySelector("span.happy-toys");
    let toyData = database.happyToys.find((toy) => { return toy.id === database.orderBuilder.toyId });

    orderToy.innerHTML = `
    <div class="card mb-3 food-card" style="max-width: 540px;">
    <div class="row g-0" background-color: >
        <div class="col-md-4 food-card">
        <img src="${toyData.img}" class="img-fluid rounded-start" alt="photo of selected dessert">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${toyData.name}</h5>
            <p class="card-text">${toyData.description}</p>
            <p class="card-text"><small class="text-muted">$${toyData.price}</small></p>
        </div>
        </div>
    </div>
    </div>`;   
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
