import { Hotdogs } from "./Hotdogs.js"
// import for drinks
import { Desserts } from "./Desserts.js"



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
            ${Hotdogs()}

            ${Desserts()}
            </section>
            <section class="col-8 order">
                <h2 class="hotdog">Placeholder hotdog</h2>
                <h2 class="drink">Placeholder drink</h2>
                <h2 class="dessert">Placeholder dessert</h2>
            </section>
        </div>
    `
}