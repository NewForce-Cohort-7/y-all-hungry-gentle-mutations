import { HotDogs } from "./Hotdogs.js"
import { Desserts } from "./Desserts.js"
import { Drinks } from "./Drinks.js"

export const HHH = () => {
    return `
        <h1>Hungry Hungry Hotdogs</h1>
        <div class="row">
            <section class="col-12">
                <p>Choose a location to pick up your order</p>
            </section>
        <div class="row">
            <section class="col-4 menu">
            <h2>Menu</h2>
            ${HotDogs()} 
            ${Drinks()}
            ${Desserts()}
            </section>
            <section class="col-8 order">
            <h2>Placeholder</h2>
            </section>
        </div>
    `
}