import { Hotdogs } from "./Hotdogs.js"
import { Drinks } from "./Drinks.js" 
import { Desserts } from "./Desserts.js"
import { Locations } from "./Locations.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./dataAccess.js"

document.addEventListener("click", (event) => {
    if(event.target.id === "orderButton") {
        addCustomOrder();
    }
}
)

export const HHH = () => {
    return `
        <div class="row justify-content-center">
            <section class="col-sm-12 main justify-content-center">
                <h1>Hungry Hungry Hotdogs</h1>
                <p>Choose a location to pick up your order</p>
                ${Locations()}
                <p><span class="locationName"></span></p>
            </section>
        <div class="row justify-content-center">
            <section class="col-sm-4 menu">
            <h2>Menu</h2>
                ${Hotdogs()}
                ${Drinks()}
                ${Desserts()} 
            <button id="orderButton">Create Custom Order</button>
            </section>
            <section class="col-sm-4 order">
                <h2>Orders</h2>
                <span class="hotdog"></span>
                <span class="drink"></span>
                <span class="dessert"></span>
                ${Orders()} 
            </section>
        </div>
    `
}