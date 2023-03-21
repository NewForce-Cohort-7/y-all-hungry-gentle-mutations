import { Hotdogs } from "./Hotdogs.js"
import { Drinks } from "./Drinks.js" 
import { Desserts } from "./Desserts.js"
import { Locations } from "./Locations.js"
import { Orders } from "./Orders.js"
import { Toys } from "./HappyToys.js"
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
                <img src="https://i.imgur.com/03pwa67.png" alt="Hungry Hungry Hotdogs Logo" width="300" height="250">
                <p class="location-sub">Choose a location to pick up your order</p>
                ${Locations()}
                <p><span class="locationName"></span></p>
            </section>
        <div class="row justify-content-center">
            <section class="col-sm-4 menu">
            <h2>Menu</h2>
                ${Hotdogs()}
                ${Drinks()}
                ${Desserts()} 
                ${Toys()}
                
            <button id="orderButton">I'm Hungry! Make my order!!!</button>
            </section>
            <section class="col-sm-4 order">
                <h2>Orders</h2>
                <span class="hotdog"></span>
                <span class="drink"></span>
                <span class="dessert"></span>
                <span class="happy-toys"></span>
                ${Orders()} 
            </section>
        </div>
    `
}