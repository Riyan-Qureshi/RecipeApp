import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGetRecipes(category: string) {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetchRecipes()
    }, [])

    const fetchRecipes = async () => {
        try{
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            console.log(response.data)
            if (response && response.data) {
                setMeals(response.data.meals)
                // console.log(meals)
            }
        } catch(err) {
            console.log('Could not fetch recipe data')
        }
    }
    return {meals}
}