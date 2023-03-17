import { database } from './database.js'

// get* 
export const getHotDogs = () => {
    return database.hotdogs.map(hotdog => ({...hotdog}))
}


// set* 
export const setHotDogs = (id) => {
    database.orderBuilder.metalId = id
}


