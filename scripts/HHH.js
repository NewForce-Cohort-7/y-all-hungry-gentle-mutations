import { HotDogs } from "./Hotdogs.js"

export const HHH = () => {
    return `
        <h1>Hungry Hungry Hotdogs</h1>
        <div class="row">
            <section class="col-12">
                <p>Choose a location to pick up your order</p>
            </section>
        <div class="row">
            <section class="col-4 menu">
            ${HotDogs()} 
            </section>
            <section class="col-8 order">
            <h2>Placeholder</h2>
            </section>
    `
}