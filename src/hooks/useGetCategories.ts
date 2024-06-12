import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGetCategories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try{
        const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php')
        if (response && response.data) {
            setCategories(response.data.categories)
        }
        } catch(err) {
        console.log('Could not fetch categories data')
        }
    }
    return {categories}
}