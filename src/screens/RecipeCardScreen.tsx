import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function RecipeCardScreen(recipeData: any) {
  const item = recipeData.route.params.item
  const [isFavourite, setFavourite] = useState(false)
  const navigation = useNavigation()

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

      {/* Return to HomeScreen / back button */}
      <View className='w-full absolute flex-row justify-between items-center pt-14'>
        <TouchableOpacity className='p-2 rounded-full bg-white ml-5' onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color={'rgba(251, 191, 36, 0.8)'}/>
        </TouchableOpacity>

      {/* Favourite recipe button */}
        <TouchableOpacity 
          className='p-2 rounded-full bg-white mr-5'
          onPress={() => {setFavourite(!isFavourite)}}
        >
          <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavourite? 'red':'gray'}/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}