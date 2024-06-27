import { Category, Recipe } from "../types/recipe";

export const categoriesList: Array<Category> = [
    {
        name: 'Breakfast',
        imageURL: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        name: 'Lunch',
        imageURL: 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        name: 'Dinner',
        imageURL: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        name: 'Dessert',
        imageURL: 'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        name: 'Snack',
        imageURL: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
]

    // Default template for Recipe data
    // {
    //     title: '',
    //     instructions: '',
    //     ingredients: [],
    //     time: {totalTime: 0, prepTime: 0, cookTime: 0},
    //     calories: 0,
    //     macros: {protein: 0, fat: 0, carb: 0},
    //     pricing: {totalPrice: 0, servingPrice: 0},
    //     servings: 0,
    //     imageURL: ''
    // },

export const recipesList: Array<Recipe> = [
    {
        "title": 'Homemade Garlic Bread',
        "instructions": 'Preheat the oven to 400ºF. In a bowl, stir together the room-temperature butter, olive oil, minced garlic, garlic powder, chopped parsley, and salt until relatively smooth (a few small lumps of butter are okay). Cut the loaf in half, into two 12" long pieces, then cut each piece open lengthwise. Lay the bread on a baking sheet cut sides facing up. Spread the garlic butter mixture evenly over the open surfaces of the bread. Bake the bread for 10-15 minutes, or until the edges are golden brown and crispy. Bake for less time if you prefer a softer garlic bread, and more time if you prefer a crispier garlic bread. Cut the bread into 2-inch sections and serve hot.',
        ingredients: [
            {name: 'Italian or French', measurement: 1, unit: 'loaf'},
            {name: 'Butter', measurement: 6, unit: 'tbsp'},
            {name: 'Olive Oil', measurement: 2, unit: 'tbsp'},
            {name: 'Garlic', measurement: 4, unit: 'cloves'},
            {name: 'Chopped Parsley', measurement: 2, unit: 'tbsp'},
            {name: 'Salt', measurement: 1, unit: 'tsp'},
            {name: 'Garlic Powder', measurement: 1, unit: 'tsp'}

        ],
        time: {totalTime: 25, prepTime: 10, cookTime: 15},
        calories: 163,
        macros: {protein: 4, fat: 9, carb: 18},
        pricing: {totalPrice: 4.63, servingPrice: 0.39},
        servings: 12,
        imageURL: 'https://images.pexels.com/photos/13698106/pexels-photo-13698106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        id: 0,
        category: ["Snack"]
    },
    {
        "title": "Avocado and Egg Toast",
        "instructions": "Toast whole grain bread slices. In a skillet, cook eggs to your preference (fried, scrambled, or poached). Mash avocado with a pinch of salt and spread over toasted bread. Top with cooked eggs and a sprinkle of red pepper flakes. Serve immediately.",
        "ingredients": [
            {"name": "Whole grain bread", "measurement": 2, "unit": "slices"},
            {"name": "Eggs", "measurement": 2, "unit": "large"},
            {"name": "Avocado", "measurement": 1, "unit": "medium"},
            {"name": "Red pepper flakes", "measurement": 1, "unit": "tsp"}
        ],
        "time": {"totalTime": 10, "prepTime": 5, "cookTime": 5},
        "calories": 350,
        "macros": {"protein": 15, "fat": 25, "carb": 30},
        "pricing": {"totalPrice": 6.00, "servingPrice": 3},
        "servings": 2,
        "imageURL": "https://images.pexels.com/photos/7937471/pexels-photo-7937471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "id": 1,
        "category": ["Breakfast"]
    },
    {
        "title": "Roasted Chickpeas and Veggies",
        "instructions": "Preheat oven to 400ºF. In a bowl, toss chickpeas, diced sweet potatoes, and chopped bell peppers with olive oil, salt, and pepper. Spread on a baking sheet and roast for 25-30 minutes or until tender. Serve hot.",
        "ingredients": [
            {"name": "Chickpeas", "measurement": 1, "unit": "can"},
            {"name": "Sweet potatoes", "measurement": 2, "unit": "medium"},
            {"name": "Bell peppers", "measurement": 2, "unit": "medium"},
            {"name": "Olive oil", "measurement": 2, "unit": "tbsp"}
        ],
        "time": {"totalTime": 40, "prepTime": 10, "cookTime": 30},
        "calories": 300,
        "macros": {"protein": 10, "fat": 10, "carb": 50},
        "pricing": {"totalPrice": 6, "servingPrice": 3},
        "servings": 2,
        "imageURL": "https://cookingforpeanuts.com/wp-content/uploads/2021/04/Roasted-Chickpeas-Veggie-Bowl.jpg",
        "id": 2,
        "category": ["Lunch"]
    },
    {
        "title": "Baked Salmon with Asparagus",
        "instructions": "Preheat the oven to 400°F. Place salmon fillets on a baking sheet and season with olive oil, minced garlic, salt, and pepper. Arrange asparagus around the salmon. Bake for 12-15 minutes or until salmon is cooked through and asparagus is tender. Serve with lemon wedges.",
        "ingredients": [
            {"name": "Salmon fillets", "measurement": 2, "unit": "pieces"},
            {"name": "Asparagus", "measurement": 1, "unit": "bunch"},
            {"name": "Olive oil", "measurement": 1, "unit": "tablespoon"},
            {"name": "Garlic", "measurement": 2, "unit": "cloves"},
            {"name": "Lemon", "measurement": 1, "unit": "medium"}
        ],
        "time": {"totalTime": 20, "prepTime": 5, "cookTime": 15},
        "calories": 350,
        "macros": {"protein": 30, "fat": 20, "carb": 10},
        "pricing": {"totalPrice": 10, "servingPrice": 5},
        "servings": 2,
        "imageURL": "https://images.pexels.com/photos/7731673/pexels-photo-7731673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "id": 3,
        "category": ["Lunch", "Dinner"]
    },
    {
        "title": "Greek Yogurt Parfait",
        "instructions": "In a glass or bowl, layer Greek yogurt, granola, and mixed berries. Repeat layers until all ingredients are used up. Drizzle honey on top if desired. Serve immediately.",
        "ingredients": [
            {"name": "Greek yogurt", "measurement": 2, "unit": "cups"},
            {"name": "Granola", "measurement": 1, "unit": "cup"},
            {"name": "Mixed berries", "measurement": 1, "unit": "cup"},
            {"name": "Honey", "measurement": 2, "unit": "tablespoons"}
        ],
        "time": {"totalTime": 10, "prepTime": 10, "cookTime": 0},
        "calories": 200,
        "macros": {"protein": 10, "fat": 6, "carb": 28},
        "pricing": {"totalPrice": 4.00, "servingPrice": 2.00},
        "servings": 2,
        "imageURL": "https://images.pexels.com/photos/4696279/pexels-photo-4696279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "id": 4,
        "category": ["Dessert"]
    }
]