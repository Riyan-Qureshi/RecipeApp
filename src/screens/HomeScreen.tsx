import { StatusBar } from 'expo-status-bar'
import { View, ScrollView, Image, Text, TextInput, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BellIcon, MagnifyingGlassCircleIcon, UserCircleIcon } from "react-native-heroicons/outline";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Categories from '../components/Categories'
import useGetCategories from '../hooks/useGetCategories'
import Recipes from '../components/Recipes'
import axios from 'axios';
import { UNSTABLE_usePreventRemove } from '@react-navigation/native';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Beef')
  const {categories} = useGetCategories()
  const [meals, setMeals] = useState([])

  UNSTABLE_usePreventRemove(true, () => {})

  const fetchMeals = async () => {
      try{
          const res = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`)
          if (res && res.data) {
            setMeals(res.data.meals)
          }
      } catch(err) {
          console.log('Could not fetch meal data')
      }
  }
  
  useEffect(() => {
    fetchMeals()
  }, [activeCategory])

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className='space-y-6 pt-14'
      > 
        {/* Avatar and notification icons */}
        <View className='mx-4 flex-row justify-between items-center mb-2'>
          <UserCircleIcon size={hp(5)} color={'gray'}/>
          <BellIcon size={hp(4)} color={'gray'}/>
        </View>
      
        {/* Greetings and slogan */}
        <View className='mx-4 space-y-2 mb-2 bg-amber-500 p-2 rounded-2xl'>
          <Text style={{fontSize: hp(1.8)}} className='text-neutral-600'>Hello Riyan,</Text>
          <Text style={{fontSize: hp(3.8)}} className='font-semibold text-neutral-600'>Make your own food,</Text>
          <Text style={{fontSize: hp(3.8)}} className='font-semibold text-neutral-600'>
            stay at <Text className='text-white'>home!</Text>
          </Text>
        </View>

        {/* Recipe search bar */}
        <View style={{padding: hp(1)}} className='mx-4 flex-row items-center rounded-full bg-black/5'>
          <TextInput 
            placeholder='Search any recipe'
            placeholderTextColor={'gray'}
            style={{fontSize: hp(1.8)}}
            className='flex-1 text-base mb-1 pl-3 tracking-wider'
          />
          <MagnifyingGlassCircleIcon color={'gray'} size={hp(4)}/>
        </View>

        {/* Categories section */}
        <View className='mx-4'>
          {categories.length>0 && <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>}
        </View>
        
        {/* Recipe section */}
        <View className='mx-4'>
          {
            meals.length>0 && categories.length>0? <Recipes meals={meals}/> : <ActivityIndicator size={'large'} color={'rgba(251, 191, 36, 0.8)'}/>
          }
        </View>
      </ScrollView>
    </View>
  )
}