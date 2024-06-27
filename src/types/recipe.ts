export interface Ingredient {
    name: string
    measurement: number
    unit: string
}

export interface Macros {
    protein: number
    fat: number
    carb: number
}

export interface Pricing {
    totalPrice: number
    servingPrice: number
}

export interface Time {
    totalTime: number
    prepTime: number
    cookTime: number
}

export interface Recipe {
    title: string
    instructions: string
    ingredients: Array<Ingredient>
    time: Time
    calories: number
    macros: Macros
    pricing: Pricing
    servings: number
    imageURL: string
    id: number
    // category: 
}

export interface Category {
    name: string
    imageURL: string
}