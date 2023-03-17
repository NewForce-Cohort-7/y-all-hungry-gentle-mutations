export const database = {
    transientState: {},
    orderBuilder: {},
    hotdogs: [
        { id: 1, name: "Triple H Dog", description: "Footlong hot dog topped with our homemade WV-style chili, cheddar cheese, sour cream, and grilled onions", img: 'https://1.bp.blogspot.com/-O_Ej8e9EzUA/YWbcaue55dI/AAAAAAAA2tc/O85Z5d0ppXQJbwkJVtvBaAPSCV5Eh4vfwCLcBGAsYHQ/s0/hot%2Bdog%2Bchili%2Bsauce%2B2%2Bpn.png', price: 9.00 },
        { id: 2, name: "Classic Footlong Hotdog", description: "12 inch hot dog on bun with your choice of toppings", img: 'https://cdn.shopify.com/s/files/1/0033/6376/6339/products/brightleaffootlonghotdog_2048x.jpg?v=1627306960', price: 7.99},
        { id: 3, name: "Corn Dawg", description: "Corndog style vegan hotdog wrapped in a syrupy batter for an all-in-one breakfast!", img: 'https://alittleinsanity.com/wp-content/uploads/2017/04/Gluten-Free-Vegan-Corndog-Recipe-Instagram.jpg', price: 5.00},
        { id: 4, name: "Bratwurst Dog", description: "Spicy in-house made bratwurst topped with onions and slaw in a brioche bun", img: 'https://assets.marthastewart.com/styles/wmax-750/d35/wisconsin-beer-brats-0617-102941317/wisconsin-beer-brats-0617-102941317_horiz.jpg?itok=yhnfWLqJ', price: 5.00 },
        { id: 5, name: "Corn Dog", description: "Our take on your favorite state fair food with your choice of toppings", img: 'https://twoplaidaprons.com/wp-content/uploads/2022/04/side-shot-Korean-corn-dog-thumbnail-500x500.jpg', price: 3.00 }
    ],
    // morgantowndogs: [
    //     { id: 1, name: "Bogey Dog", description: " Grilled all beef footlong hot dog with mustard, smoked chili, homemade slaw, and onion", img: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/a460fa2c-0383-4cf5-8d6a-694b6d0f0bc8.jpg', price: 9.00 },
    //     { id: 2, name: "Tijuana Dog", description: "Bacon-wrapped footlong hot dog topped with avocado, jalapenos, fresh crema, and pico de gallo", img: 'https://i0.wp.com/grubdelite.com/wp-content/uploads/2018/06/attachment-1-100.jpeg?fit=2727%2C2517&ssl=1', price: 10.00 },
    //     { id: 3, name: "Veg Out Dawg", description: "Plant-based hotdog topped with grilled onions, peppers, mustard, and ketchup", img: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/07/Tropical-vegan-hot-dogs-1b1e00e.jpg', price: 4.50 },
    //     { id: 4, name: "Triple H Dog", description: "Footlong hot dog topped with our homemade WV-style chili, cheddar cheese, sour cream, and grilled onions", img: 'https://1.bp.blogspot.com/-O_Ej8e9EzUA/YWbcaue55dI/AAAAAAAA2tc/O85Z5d0ppXQJbwkJVtvBaAPSCV5Eh4vfwCLcBGAsYHQ/s0/hot%2Bdog%2Bchili%2Bsauce%2B2%2Bpn.png', price: 9.00 },
    //     { id: 5, name: "Classic Footlong Hotdog", description: "12 inch hot dog on bun with your choice of toppings", img: 'https://cdn.shopify.com/s/files/1/0033/6376/6339/products/brightleaffootlonghotdog_2048x.jpg?v=1627306960', price: 7.99},
    //     { id: 6, name: "Korn Dawg", description: "Corndog style vegan hotdog wrapped in a syrupy batter for an all-in-one breakfast!", img: 'https://alittleinsanity.com/wp-content/uploads/2017/04/Gluten-Free-Vegan-Corndog-Recipe-Instagram.jpg', price: 5.00},
    //     { id: 7, name: "Bratwurst Dog", description: "Spicy in-house made bratwurst topped with onions and slaw in a brioche bun", img: 'https://assets.marthastewart.com/styles/wmax-750/d35/wisconsin-beer-brats-0617-102941317/wisconsin-beer-brats-0617-102941317_horiz.jpg?itok=yhnfWLqJ', price: 5.00 },
    //     { id: 8, name: "Corn Dog", description: "Our take on your favorite state fair food with your choice of toppings", img: 'https://twoplaidaprons.com/wp-content/uploads/2022/04/side-shot-Korean-corn-dog-thumbnail-500x500.jpg', price: 3.00 }
    // ],
    // fairmontdogs: [
    //     { id: 1, name: "Canadian Dog", description: "A hotdog and bun topped with fries and cheese, soaked in gravy", img: 'https://i.imgur.com/pSdfxGR.png', price: 7.00 },
    //     { id: 2, name: "Mothman Dog", description: "Topped with blue cheese, buffalo sauce, and jalapenos", img: 'https://i.imgur.com/wvYH0Il.jpg', price: 7.00 },
    //     { id: 3, name: "Triple H Dog", description: "Footlong hot dog topped with our homemade WV-style chili, cheddar cheese, sour cream, and grilled onions", img: 'https://1.bp.blogspot.com/-O_Ej8e9EzUA/YWbcaue55dI/AAAAAAAA2tc/O85Z5d0ppXQJbwkJVtvBaAPSCV5Eh4vfwCLcBGAsYHQ/s0/hot%2Bdog%2Bchili%2Bsauce%2B2%2Bpn.png', price: 9.00 },
    //     { id: 4, name: "Classic Footlong Hotdog", description: "12 inch hot dog on bun with your choice of toppings", img: 'https://cdn.shopify.com/s/files/1/0033/6376/6339/products/brightleaffootlonghotdog_2048x.jpg?v=1627306960', price: 7.99},
    //     { id: 5, name: "Corn Dawg", description: "Corndog style vegan hotdog wrapped in a syrupy batter for an all-in-one breakfast!", img: 'https://alittleinsanity.com/wp-content/uploads/2017/04/Gluten-Free-Vegan-Corndog-Recipe-Instagram.jpg', price: 5.00},
    //     { id: 6, name: "Bratwurst Dog", description: "Spicy in-house made bratwurst topped with onions and slaw in a brioche bun", img: 'https://assets.marthastewart.com/styles/wmax-750/d35/wisconsin-beer-brats-0617-102941317/wisconsin-beer-brats-0617-102941317_horiz.jpg?itok=yhnfWLqJ', price: 5.00 },
    //     { id: 7, name: "Corn Dog", description: "Our take on your favorite state fair food with your choice of toppings", img: 'https://twoplaidaprons.com/wp-content/uploads/2022/04/side-shot-Korean-corn-dog-thumbnail-500x500.jpg', price: 3.00 }
    // ],
    // charlestondogs: [
    //     { id: 1, name: "Governor J.J.'s Baby Dog", description: "English breakfast sausage with baked beans, mushrooms, tomatoes, bacon bits, and topped with a fried egg on a bun", img: 'https://i.imgur.com/k6rUHt2.jpg', price: 9.00 }, 
    //     { id: 2, name: "Golden Capitol Dog", description: "A traditional WV-style hotdog with chili, slaw, mustard, diced onions, and topped in 14K edible gold leaf", img: 'https://i.imgur.com/ShYvGYm.jpg', price: 99.00 },
    //     { id: 3, name: "Triple H Dog", description: "Footlong hot dog topped with our homemade WV-style chili, cheddar cheese, sour cream, and grilled onions", img: 'https://1.bp.blogspot.com/-O_Ej8e9EzUA/YWbcaue55dI/AAAAAAAA2tc/O85Z5d0ppXQJbwkJVtvBaAPSCV5Eh4vfwCLcBGAsYHQ/s0/hot%2Bdog%2Bchili%2Bsauce%2B2%2Bpn.png', price: 9.00 },
    //     { id: 4, name: "Classic Footlong Hotdog", description: "12 inch hot dog on bun with your choice of toppings", img: 'https://cdn.shopify.com/s/files/1/0033/6376/6339/products/brightleaffootlonghotdog_2048x.jpg?v=1627306960', price: 7.99},
    //     { id: 5, name: "Corn Dawg", description: "Corndog style vegan hotdog wrapped in a syrupy batter for an all-in-one breakfast!", img: 'https://alittleinsanity.com/wp-content/uploads/2017/04/Gluten-Free-Vegan-Corndog-Recipe-Instagram.jpg', price: 5.00},
    //     { id: 6, name: "Bratwurst Dog", description: "Spicy in-house made bratwurst topped with onions and slaw in a brioche bun", img: 'https://assets.marthastewart.com/styles/wmax-750/d35/wisconsin-beer-brats-0617-102941317/wisconsin-beer-brats-0617-102941317_horiz.jpg?itok=yhnfWLqJ', price: 5.00 },
    //     { id: 7, name: "Corn Dog", description: "Our take on your favorite state fair food with your choice of toppings", img: 'https://twoplaidaprons.com/wp-content/uploads/2022/04/side-shot-Korean-corn-dog-thumbnail-500x500.jpg', price: 3.00 }
    // ],
    drinks: [
        { id: 1, name: "Mountain Dew", img: 'https://www.meijer.com/content/dam/meijer/product/0001/20/0000/13/0001200000131_1200.png', price: 1.50 },
        { id: 2, name: "Sprite", img: 'https://cdn.shopify.com/s/files/1/0088/8612/4606/products/chrome_YUAbrmX3em_466x466.png?v=1647897946', price: 1.50 },
        { id: 3, name: "Coke", img: 'https://scene7.samsclub.com/is/image/samsclub/0004900002468_B?wid=400&hei=400', price: 1.50 },
        { id: 4, name: "Sweet Tea", img: 'https://sugarspunrun.com/wp-content/uploads/2022/05/Easy-sweet-tea-recipe-4-of-6.jpg', price: 1.50 },
        { id: 5, name: "Blackberry Lemonade", img: 'https://i0.wp.com/saygraceblog.com/wp-content/uploads/2016/06/Summer-Blackberry-Lemonade.jpg?w=667&ssl=1', price: 1.75 },
        { id: 6, name: "Water", img: 'https://m.media-amazon.com/images/I/81BeAomXzOL._SY445_.jpg', price: 1.00 }
    ],
    // morgantowndrinks: [
    //     { id: 1, name: "Appalachian Appletini", description: "A non-alcoholic cocktail made with our fizzy apple cider, lemon juice, and green apple syrup", img: 'https://coastalwandering.com/wp-content/uploads/2021/03/green-apple-martini-recipe-coastal-wandering-6s.jpg', price: 3.00 },
    //     { id: 2, name: "Mountain Dew", img: 'https://www.meijer.com/content/dam/meijer/product/0001/20/0000/13/0001200000131_1200.png', price: 1.50 },
    //     { id: 3, name: "Sprite", img: 'https://cdn.shopify.com/s/files/1/0088/8612/4606/products/chrome_YUAbrmX3em_466x466.png?v=1647897946', price: 1.50 },
    //     { id: 4, name: "Coke", img: 'https://scene7.samsclub.com/is/image/samsclub/0004900002468_B?wid=400&hei=400', price: 1.50 },
    //     { id: 5, name: "Sweet Tea", img: 'https://sugarspunrun.com/wp-content/uploads/2022/05/Easy-sweet-tea-recipe-4-of-6.jpg', price: 1.50 },
    //     { id: 6, name: "Blackberry Lemonade", img: 'https://i0.wp.com/saygraceblog.com/wp-content/uploads/2016/06/Summer-Blackberry-Lemonade.jpg?w=667&ssl=1', price: 1.75 },
    //     { id: 7, name: "Water", img: 'https://m.media-amazon.com/images/I/81BeAomXzOL._SY445_.jpg', price: 1.00 }
    // ],
    // fairmontdrinks: [
    //     { id: 1, name: "Bubble Bubble Trouble", description: "Fizzy apple cider with a colorful surprise!", img: 'https://www.sugarhero.com/wp-content/uploads/2020/10/witches-brew-halloween-punch-10.jpg', price: 4.00 },
    //     { id: 2, name: "Mountain Dew", img: 'https://www.meijer.com/content/dam/meijer/product/0001/20/0000/13/0001200000131_1200.png', price: 1.50 },
    //     { id: 3, name: "Sprite", img: 'https://cdn.shopify.com/s/files/1/0088/8612/4606/products/chrome_YUAbrmX3em_466x466.png?v=1647897946', price: 1.50 },
    //     { id: 4, name: "Coke", img: 'https://scene7.samsclub.com/is/image/samsclub/0004900002468_B?wid=400&hei=400', price: 1.50 },
    //     { id: 5, name: "Sweet Tea", img: 'https://sugarspunrun.com/wp-content/uploads/2022/05/Easy-sweet-tea-recipe-4-of-6.jpg', price: 1.50 },
    //     { id: 6, name: "Blackberry Lemonade", img: 'https://i0.wp.com/saygraceblog.com/wp-content/uploads/2016/06/Summer-Blackberry-Lemonade.jpg?w=667&ssl=1', price: 1.75 },
    //     { id: 7, name: "Water", img: 'https://m.media-amazon.com/images/I/81BeAomXzOL._SY445_.jpg', price: 1.00 }
    // ],
    // charlestondrinks: [
    //     { id: 1, name: "The State Senator", description: "A non-alcoholic cocktail made with blackberry syrup and tarragon", img: 'https://creative-culinary.com/wp-content/uploads/blackberry-gin-sling-1.jpg', price: 3.50 },
    //     { id: 2, name: "Mountain Dew", img: 'https://www.meijer.com/content/dam/meijer/product/0001/20/0000/13/0001200000131_1200.png', price: 1.50 },
    //     { id: 3, name: "Sprite", img: 'https://cdn.shopify.com/s/files/1/0088/8612/4606/products/chrome_YUAbrmX3em_466x466.png?v=1647897946', price: 1.50 },
    //     { id: 4, name: "Coke", img: 'https://scene7.samsclub.com/is/image/samsclub/0004900002468_B?wid=400&hei=400', price: 1.50 },
    //     { id: 5, name: "Sweet Tea", img: 'https://sugarspunrun.com/wp-content/uploads/2022/05/Easy-sweet-tea-recipe-4-of-6.jpg', price: 1.50 },
    //     { id: 6, name: "Blackberry Lemonade", img: 'https://i0.wp.com/saygraceblog.com/wp-content/uploads/2016/06/Summer-Blackberry-Lemonade.jpg?w=667&ssl=1', price: 1.75 },
    //     { id: 7, name: "Water", img: 'https://m.media-amazon.com/images/I/81BeAomXzOL._SY445_.jpg', price: 1.00 }
    // ],
    desserts: [
        { id: 1, name: "Banana Split", description: "Three different flavors of ice cream served between two banana halves, topped with whipped cream, fudge, and chopped peanuts", img: 'https://www.thespruceeats.com/thmb/3QatTcsVjKeDVCD-rIeUa4fSRAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-banana-split-recipe-305712-hero-01-ef0482a539394da0b5ba64ade0c73b98.jpg', price: 5.00  },
        { id: 2, name: "Caramel Sundae", description: "Chocolate ice cream drizzled with caramel sauce", img: 'https://icecreamfromscratch.com/wp-content/uploads/2022/09/Caramel-Sundae-1.2-735x1103.jpg', price: 3.00 },
        { id: 3, name: "Hot Fudge Sundae", description: "Vanilla ice cream topped with our secret chocolate sauce", img: 'https://preppykitchen.com/wp-content/uploads/2021/04/Hot-Fudge-Sundae-Feature.jpg', price: 3.00 },
        { id: 4, name: "Fruit Salad", description: "Seasonal fruit salad (whipped topping optional)", img: 'https://veganinthefreezer.com/wp-content/uploads/2021/08/Summer-Fruit-Salad-17-720x480.jpg', price: 2.00 },
        { id: 5, name: "Soft Serve on a Cone", description: "Vanilla, chocolate, or strawberry soft serve icecream housed in a waffle cone", img: 'https://i.ebayimg.com/images/g/iGkAAOSwwSlgZG2W/s-l1600.jpg', price: 2.00 }
    ],
    // morgantowndesserts: [
    //     { id: 1, name: "Mountaineer Mugcake", description: "Homemade chocolate and walnut brownie mugcake with hot & runny chocolate icing and yellow and blue sprinkles. Comes with a Hungry Hungry Hotdogs souvenir mug!", img: 'image.png', price: 7.00 },
    //     { id: 2, name: "Mountaineer Mudcake", description: "A slice of our homemade chocolate and walnut brownie MUDcake with hot & runny chocolate icing and yellow and blue sprinkles. Add whipped cream for an additional .50", img: 'https://www.recipetineats.com/wp-content/uploads/2020/11/Pour-Mirror-Glaze-over-Cake.jpg?w=900', price: 3.50 },
    //     { id: 3, name: "Banana Split", description: "Three different flavors of ice cream served between two banana halves, topped with whipped cream, fudge, and chopped peanuts", img: 'https://www.thespruceeats.com/thmb/3QatTcsVjKeDVCD-rIeUa4fSRAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-banana-split-recipe-305712-hero-01-ef0482a539394da0b5ba64ade0c73b98.jpg', price: 5.00  },
    //     { id: 4, name: "Caramel Sundae", description: "Chocolate ice cream drizzled with caramel sauce", img: 'https://icecreamfromscratch.com/wp-content/uploads/2022/09/Caramel-Sundae-1.2-735x1103.jpg', price: 3.00 },
    //     { id: 5, name: "Hot Fudge Sundae", description: "Vanilla ice cream topped with our secret chocolate sauce", img: 'https://preppykitchen.com/wp-content/uploads/2021/04/Hot-Fudge-Sundae-Feature.jpg', price: 3.00 },
    //     { id: 6, name: "Fruit Salad", description: "Seasonal fruit salad (whipped topping optional)", img: 'https://veganinthefreezer.com/wp-content/uploads/2021/08/Summer-Fruit-Salad-17-720x480.jpg', price: 2.00 },
    //     { id: 7, name: "Soft Serve on a Cone", description: "Vanilla, chocolate, or strawberry soft serve icecream housed in a waffle cone", img: 'https://i.ebayimg.com/images/g/iGkAAOSwwSlgZG2W/s-l1600.jpg', price: 2.00 }
    // ],
    // fairmontdesserts: [
    //     {  id: 1, name: "The Veggieman", description: "Vegan meringue topped with black licorice syrup and a strawberry cream", img: 'https://static.wikia.nocookie.net/cryptidz/images/e/e0/Veggiemann.jpg/revision/latest/scale-to-width-down/180?cb=20201020193624', price: 9.52 },
    //     { id: 2, name: "Banana Split", description: "Three different flavors of ice cream served between two banana halves, topped with whipped cream, fudge, and chopped peanuts", img: 'https://www.thespruceeats.com/thmb/3QatTcsVjKeDVCD-rIeUa4fSRAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-banana-split-recipe-305712-hero-01-ef0482a539394da0b5ba64ade0c73b98.jpg', price: 5.00  },
    //     { id: 3, name: "Caramel Sundae", description: "Chocolate ice cream drizzled with caramel sauce", img: 'https://icecreamfromscratch.com/wp-content/uploads/2022/09/Caramel-Sundae-1.2-735x1103.jpg', price: 3.00 },
    //     { id: 4, name: "Hot Fudge Sundae", description: "Vanilla ice cream topped with our secret chocolate sauce", img: 'https://preppykitchen.com/wp-content/uploads/2021/04/Hot-Fudge-Sundae-Feature.jpg', price: 3.00 },
    //     { id: 5, name: "Fruit Salad", description: "Seasonal fruit salad (whipped topping optional)", img: 'https://veganinthefreezer.com/wp-content/uploads/2021/08/Summer-Fruit-Salad-17-720x480.jpg', price: 2.00 },
    //     { id: 6, name: "Soft Serve on a Cone", description: "Vanilla, chocolate, or strawberry soft serve icecream housed in a waffle cone", img: 'https://i.ebayimg.com/images/g/iGkAAOSwwSlgZG2W/s-l1600.jpg', price: 2.00 }
    // ],
    // charlestondesserts: [
    //     { id: 1, name: "The Snowshoe", description: "Shaved ice topped with our delicious fruit salad and honey", img: 'https://nexttrip.info/up_load_files/779/photo04.jpg', price: 3.50 },
    //     { id: 2, name: "Banana Split", description: "Three different flavors of ice cream served between two banana halves, topped with whipped cream, fudge, and chopped peanuts", img: 'https://www.thespruceeats.com/thmb/3QatTcsVjKeDVCD-rIeUa4fSRAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-banana-split-recipe-305712-hero-01-ef0482a539394da0b5ba64ade0c73b98.jpg', price: 5.00  },
    //     { id: 3, name: "Caramel Sundae", description: "Chocolate ice cream drizzled with caramel sauce", img: 'https://icecreamfromscratch.com/wp-content/uploads/2022/09/Caramel-Sundae-1.2-735x1103.jpg', price: 3.00 },
    //     { id: 4, name: "Hot Fudge Sundae", description: "Vanilla ice cream topped with our secret chocolate sauce", img: 'https://preppykitchen.com/wp-content/uploads/2021/04/Hot-Fudge-Sundae-Feature.jpg', price: 3.00 },
    //     { id: 5, name: "Fruit Salad", description: "Seasonal fruit salad (whipped topping optional)", img: 'https://veganinthefreezer.com/wp-content/uploads/2021/08/Summer-Fruit-Salad-17-720x480.jpg', price: 2.00 },
    //     { id: 6, name: "Soft Serve on a Cone", description: "Vanilla, chocolate, or strawberry soft serve icecream housed in a waffle cone", img: 'https://i.ebayimg.com/images/g/iGkAAOSwwSlgZG2W/s-l1600.jpg', price: 2.00 }
    // ],
    customOrders: []
}






