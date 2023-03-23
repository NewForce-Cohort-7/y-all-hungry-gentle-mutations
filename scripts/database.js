export const database = {
    orderBuilder: {},
    hotdogs: [
        { id: 1, name: "[NO HOTDOG]", price: 0, description: "You will not receive a hotdog.", img: 'https://i.imgur.com/xeRzvBO.png'},
        { id: 2, name: "Triple H Dog", description: "Footlong hot dog topped with our homemade WV-style chili, cheddar cheese, sour cream, and grilled onions", img: 'https://i.ibb.co/Mh34PXz/hot-dog-chili-sauce-2-pn-Edited.png', price: 9.00 },
        { id: 3, name: "The Footlong Hotdog", description: "12 inch hot dog on bun with your choice of toppings", img: 'https://cdn.shopify.com/s/files/1/0033/6376/6339/products/brightleaffootlonghotdog_2048x.jpg?v=1627306960', price: 7.99},
        { id: 4, name: "Corn Dawg", description: "Corndog style vegan hotdog wrapped in a syrupy batter for an all-in-one breakfast!", img: 'https://alittleinsanity.com/wp-content/uploads/2017/04/Gluten-Free-Vegan-Corndog-Recipe-Instagram.jpg', price: 5.00},
        { id: 5, name: "Bratwurst Dog", description: "Spicy in-house made bratwurst topped with onions and slaw in a brioche bun", img: 'https://assets.marthastewart.com/styles/wmax-750/d35/wisconsin-beer-brats-0617-102941317/wisconsin-beer-brats-0617-102941317_horiz.jpg?itok=yhnfWLqJ', price: 5.00 },
        { id: 6, name: "Corn Dog", description: "Our take on your favorite state fair food with your choice of toppings", img: 'https://twoplaidaprons.com/wp-content/uploads/2022/04/side-shot-Korean-corn-dog-thumbnail-500x500.jpg', price: 3.00 },
        { id: 7, name: "Bogey Dog", description: "Grilled all beef footlong hot dog with mustard, smoked chili, homemade slaw, and onion", img: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/a460fa2c-0383-4cf5-8d6a-694b6d0f0bc8.jpg', price: 9.25 },
        { id: 8, name: "Tijuana Dog", description: "Bacon-wrapped footlong hot dog topped with avocade, jalapenos, fresh crema, and pico de gallo", img: 'https://i0.wp.com/grubdelite.com/wp-content/uploads/2018/06/attachment-1-100.jpeg?fit=2727%2C2517&ssl=1', price: 10.00 },
        { id: 9, name: "Veg Out Dawg", description: "Plant-based hotdog topped with grilled onions, peppers, mustard, and ketchup", img: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/07/Tropical-vegan-hot-dogs-1b1e00e.jpg', price: 4.50 },
        { id: 10, name: "Canadian Dog", description: "A hotdog and bun topped with fries and cheese, soaked in gravy", img: 'https://i.imgur.com/pSdfxGR.png', price: 8.00 },
        { id: 11, name: "Mothman Dog", description: "Topped with blue cheese, buffalo sauce, and jalapenos", img: 'https://i.imgur.com/wvYH0Il.jpg', price: 12.00  },
        { id: 12, name: "Governor J.J.'s Baby Dog", description: "English breakfast sausage with baked beans, mushrooms, tomatoes, bacon bits, and topped with a fried egg", img: 'https://i.imgur.com/k6rUHt2.jpg', price: 9.50 },
        { id: 13, name: "Golden Capitol Dog", description: "A traditional WV-style hotdog with chili, slaw, mustard, diced onions, and topped in 14K edible gold leaf", img: 'https://i.imgur.com/ShYvGYm.jpg', price: 99.00 },
    ],
    drinks: [
        { id: 1, name: "[NO DRINK]", description: "", img: 'https://i.imgur.com/xeRzvBO.png', price: 0 },
        { id: 2, name: "Mountain Dew", description: "", img: 'https://www.meijer.com/content/dam/meijer/product/0001/20/0000/13/0001200000131_1200.png', price: 1.50 },
        { id: 3, name: "Sprite", description: "", img: 'https://cdn.shopify.com/s/files/1/0088/8612/4606/products/chrome_YUAbrmX3em_466x466.png?v=1647897946', price: 1.50 },
        { id: 4, name: "Coke", description: "", img: 'https://scene7.samsclub.com/is/image/samsclub/0004900002468_B?wid=400&hei=400', price: 1.50 },
        { id: 5, name: "Sweet Tea", description: "", img: 'https://sugarspunrun.com/wp-content/uploads/2022/05/Easy-sweet-tea-recipe-4-of-6.jpg', price: 1.50 },
        { id: 6, name: "Blackberry Lemonade", description: "", img: 'https://i0.wp.com/saygraceblog.com/wp-content/uploads/2016/06/Summer-Blackberry-Lemonade.jpg?w=667&ssl=1', price: 1.75 },
        { id: 7, name: "Water", description: "", img: 'https://m.media-amazon.com/images/I/81BeAomXzOL._SY445_.jpg', price: 1.00 },
        { id: 8, name: "Appalachian Appletini", description: "A non-alcoholic cocktail made with our fizzy apple cider, lemon juice, and green apple syrup", img: 'https://amandascookin.com/wp-content/uploads/2020/04/appletini-cocktail-recipe-RC-600x600.jpg', price: 3.00},
        { id: 9, name: "Bubble Bubble Trouble", description: "Fizzy apple cider with a colorful surprise!", img: 'https://www.sugarhero.com/wp-content/uploads/2020/10/witches-brew-halloween-punch-10.jpg', price: 4.00},
        { id: 10, name: "The State Senator", description: "A non-alcoholic cocktail made with blackberry syrup and tarragon", img: 'https://creative-culinary.com/wp-content/uploads/blackberry-gin-sling-1.jpg', price: 3.50}
    ],
    desserts: [
        { id: 1, name: "[NO DESSERT]", description: "You will not receive a dessert.", img: 'https://i.imgur.com/xeRzvBO.png', price: 0 },
        { id: 2, name: "Banana Split", description: "Three different flavors of ice cream served between two banana halves, topped with whipped cream, fudge, and chopped peanuts", img: 'https://www.thespruceeats.com/thmb/3QatTcsVjKeDVCD-rIeUa4fSRAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-banana-split-recipe-305712-hero-01-ef0482a539394da0b5ba64ade0c73b98.jpg', price: 5.00  },
        { id: 3, name: "Caramel Sundae", description: "Chocolate ice cream drizzled with caramel sauce", img: 'https://icecreamfromscratch.com/wp-content/uploads/2022/09/Caramel-Sundae-1.2-735x1103.jpg', price: 3.00 },
        { id: 4, name: "Hot Fudge Sundae", description: "Vanilla ice cream topped with our secret chocolate sauce", img: 'https://preppykitchen.com/wp-content/uploads/2021/04/Hot-Fudge-Sundae-Feature.jpg', price: 3.00 },
        { id: 5, name: "Fruit Salad", description: "Seasonal fruit salad (whipped topping optional)", img: 'https://veganinthefreezer.com/wp-content/uploads/2021/08/Summer-Fruit-Salad-17-720x480.jpg', price: 2.50 },
        { id: 6, name: "Soft Serve on a Cone", description: "Vanilla, chocolate, or strawberry soft serve icecream housed in a waffle cone", img: 'https://i.ebayimg.com/images/g/iGkAAOSwwSlgZG2W/s-l1600.jpg', price: 2.00},
        { id: 7, name: "Mountaineer Mugcake", description: "Homemade chocolate and walnut brownie mugcake with hot chocolate icing and yellow and blue sprinkles. Comes with a Hungry Hungry Hotdogs souvenir mug!", img: 'https://brooklynfarmgirl.com/wp-content/uploads/2013/11/Chocolate-Banana-Mug-Cake_8-768x1152.jpg', price: 6.00},
        { id: 8, name: "The Veggieman", description: "Vegan meringue topped with black licorice syrup and a strawberry cream", img: 'https://static.wikia.nocookie.net/cryptidz/images/e/e0/Veggiemann.jpg', price: 5.00},
        { id: 9, name: "The Snowshoe", description: "Shaved ice topped with our fruit salad and honey", img: 'https://nexttrip.info/up_load_files/779/photo04.jpg', price: 5.00}
    ],
    happyToys: [
        { id: 1, name: "[NO HAPPY TOY]", description: "You will not receive a Happy Toy.", img: "https://i.imgur.com/xeRzvBO.png", price: 0 },
        { id: 2, name: "Hungry Hungry Hotdog Man", description: "An action figure of our mascot, Hungry Hungry Hotdog Man", img: "https://i.ebayimg.com/images/g/NxkAAOSwTSdfiwGU/s-l500.jpg", price: 1.00 },
        { id: 3, name: "Plush Hotdog", description: "An adorable mini-hotdog plushie", img: "https://cdn.shopify.com/s/files/1/0584/3841/products/polyester-yummy-world-franky-hotdog-10-plush-1.jpg", price: 1.00 },
        { id: 4, name: "Best Friend's Hotdoggie", description: "A rubber hotdog toy for man's best friend", img: "https://www.imprintitems.com/userfiles/files/asi-media/7257638.jpg", price: 1.00 }
    ],
    locations: [
        { id: 1, name: "Morgantown, WV", address: "13 High St, Morgantown, WV, 26505" },
        { id: 2, name: "Fairmont, WV", address: "7 Locust Ave, Fairmont, WV 26554" },
        { id: 3, name: "Charleston, WV", address: "800 Smith St, Charleston, WV 25301" }
    ],
    hotdogLocations: [
        { id: 1, locationId: 1, hotdogId: 1, quantity: 0 },
        { id: 2, locationId: 1, hotdogId: 2, quantity: 110 },
        { id: 3, locationId: 1, hotdogId: 3, quantity: 1100 },
        { id: 4, locationId: 1, hotdogId: 4, quantity: 1101 },
        { id: 5, locationId: 1, hotdogId: 5, quantity: 1102 },
        { id: 6, locationId: 1, hotdogId: 6, quantity: 1103 },
        { id: 7, locationId: 1, hotdogId: 7, quantity: 1104 },
        { id: 8, locationId: 1, hotdogId: 8, quantity: 1105 },
        { id: 9, locationId: 1, hotdogId: 9, quantity: 1106 },
        { id: 10, locationId: 2, hotdogId: 1, quantity: 0 },
        { id: 11, locationId: 2, hotdogId: 2, quantity: 90 },
        { id: 12, locationId: 2, hotdogId: 3, quantity: 90 },
        { id: 13, locationId: 2, hotdogId: 4, quantity: 90 },
        { id: 14, locationId: 2, hotdogId: 5, quantity: 90 },
        { id: 15, locationId: 2, hotdogId: 6, quantity: 90},
        { id: 16, locationId: 2, hotdogId: 10, quantity: 90 },
        { id: 17, locationId: 2, hotdogId: 11, quantity: 90 },
        { id: 18, locationId: 3, hotdogId: 1, quantity: 0 },
        { id: 19, locationId: 3, hotdogId: 2, quantity: 70 },
        { id: 20, locationId: 3, hotdogId: 3, quantity: 70 },
        { id: 21, locationId: 3, hotdogId: 4, quantity: 70 },
        { id: 22, locationId: 3, hotdogId: 5, quantity: 70 },
        { id: 23, locationId: 3, hotdogId: 6, quantity: 70 },
        { id: 24, locationId: 3, hotdogId: 12, quantity: 70, },
        { id: 25, locationId: 3, hotdogId: 13, quantity: 70 }
    ],
    drinkLocations: [ 
        { id: 1, locationId: 1, drinkId: 1, quantity: 0 }, 
        { id: 2, locationId: 1, drinkId: 2, quantity: 100 },
        { id: 3, locationId: 1, drinkId: 3, quantity: 100 },
        { id: 4, locationId: 1, drinkId: 4, quantity: 100 },
        { id: 5, locationId: 1, drinkId: 5, quantity: 100 },
        { id: 6, locationId: 1, drinkId: 6, quantity: 100 },
        { id: 7, locationId: 1, drinkId: 7, quantity: 100 },
        { id: 8, locationId: 1, drinkId: 8, quantity: 100 },
        { id: 9, locationId: 2, drinkId: 1, quantity: 0 },
        { id: 10, locationId: 2, drinkId: 2, quantity: 80 },
        { id: 11, locationId: 2, drinkId: 3, quantity: 80 },
        { id: 12, locationId: 2, drinkId: 4, quantity: 80 },
        { id: 13, locationId: 2, drinkId: 5, quantity: 80 },
        { id: 14, locationId: 2, drinkId: 6, quantity: 80 },
        { id: 15, locationId: 2, drinkId: 7, quantity: 80 },
        { id: 16, locationId: 2, drinkId: 9, quantity: 80 },
        { id: 17, locationId: 3, drinkId: 1, quantity: 0 },
        { id: 18, locationId: 3, drinkId: 2, quantity: 60 },
        { id: 19, locationId: 3, drinkId: 3, quantity: 60 },
        { id: 20, locationId: 3, drinkId: 4, quantity: 60 },
        { id: 21, locationId: 3, drinkId: 5, quantity: 60 },
        { id: 22, locationId: 3, drinkId: 6, quantity: 60 },
        { id: 23, locationId: 3, drinkId: 7, quantity: 60 },
        { id: 24, locationId: 3, drinkId: 10, quantity: 60 },
    ],
    dessertLocations: [
        {id: 1, locationId: 1, dessertId: 1, quantity: 0 },
        {id: 2, locationId: 1, dessertId: 2, quantity: 50 },
        {id: 3, locationId: 1, dessertId: 3, quantity: 50 },
        {id: 4, locationId: 1, dessertId: 4, quantity: 50 },
        {id: 5, locationId: 1, dessertId: 5, quantity: 50 },
        {id: 6, locationId: 1, dessertId: 6, quantity: 50 },
        {id: 7, locationId: 1, dessertId: 7, quantity: 50 },
        {id: 8, locationId: 2, dessertId: 1, quantity: 0 },
        {id: 9, locationId: 2, dessertId: 2, quantity: 40 },
        {id: 10, locationId: 2, dessertId: 3, quantity: 40 },
        {id: 11, locationId: 2, dessertId: 4, quantity: 40 },
        {id: 12, locationId: 2, dessertId: 5, quantity: 40 },
        {id: 13, locationId: 2, dessertId: 6, quantity: 40 },
        {id: 14, locationId: 2, dessertId: 8, quantity: 40 },
        {id: 15, locationId: 3, dessertId: 1, quantity: 0 },
        {id: 16, locationId: 3, dessertId: 2, quantity: 30 },
        {id: 17, locationId: 3, dessertId: 3, quantity: 30 },
        {id: 18, locationId: 3, dessertId: 4, quantity: 30 },
        {id: 19, locationId: 3, dessertId: 5, quantity: 30 },
        {id: 20, locationId: 3, dessertId: 6, quantity: 30 },
        {id: 21, locationId: 3, dessertId: 9, quantity: 30 }
    ],
    happyToysLocations: [
        { id: 1, locationId: 1, toyId: 1, quantity: 0 },
        { id: 2, locationId: 1, toyId: 2, quantity: 20},
        { id: 3, locationId: 1, toyId: 3, quantity: 20 },
        { id: 4, locationId: 2, toyId: 1, quantity: 0 },
        { id: 5, locationId: 2, toyId: 2, quantity: 10 },
        { id: 6, locationId: 2, toyId: 3, quantity: 10},
        { id: 7, locationId: 2, toyId: 4, quantity: 10 },
        { id: 8, locationId: 3, toyId: 1, quantity: 0 },
        { id: 9, locationId: 3, toyId: 2, quantity: 15 },
        { id: 9, locationId: 3, toyId: 4, quantity: 15 }
    ],
    customOrders: []
}






