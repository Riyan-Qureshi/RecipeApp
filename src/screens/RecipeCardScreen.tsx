import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { RecipeData } from '../constants/MockFoodData'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

export default function RecipeCardScreen(recipeData: any) {
  const item = recipeData.route.params.item
  return (
    <ScrollView 
      className='flex-1 bg-white mx-1 my-1'
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="light" />
      <View className='justify-center items-center'>
        <Image 
          source={{uri: item.strMealThumb}}
          style={{width: wp(98), height: hp(50), borderRadius: 55}}
        />
        <Text>{item.strMeal}</Text>
      </View>
      <View>
        <TouchableOpacity>
          
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}