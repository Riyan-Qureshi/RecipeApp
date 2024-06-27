import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { ClockIcon, HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import RecipeKeyDetail from '../utilities/RecipeKeyDetail'
import YoutubeIframe from 'react-native-youtube-iframe'
import { CachedImage } from '../helpers/CachedImage'
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated'
import { DataTable } from 'react-native-paper'
import { Recipe } from '../types/recipe'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CustomRecipeCardScreen(mealData: any) {
  const item: Recipe = mealData.route.params.item
  const [isFavourite, setFavourite] = useState(false)
  const navigation = useNavigation()
//   const [recipe, setRecipe] = useState([])

//   const getYoutubeVideoID = (url: string) => {
//     const regex: RegExp = /[?&]v=([^&]+)/;
//     const match: RegExpMatchArray | null = url.match(regex)
//     if (match && match[1]) {
//       return match[1]
//     }
//     return undefined
//   }

  const cookTimes: number[] = [item.time.prepTime, item.time.cookTime, item.time.totalTime]
  const numberedInstructions: string[] = item.instructions.split(". ");

  return (
    <ScrollView 
      className='flex-1 bg-white mx-1 my-1 mb-4'
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="light" />

      {/* Recipe image */}
      <Animated.View entering={FadeIn.duration(700)} className='justify-center mb-4'>
        {/* <Image 
          source={{uri: item.imageURL}}
          style={{width: wp(98), height: hp(50), borderRadius: 55}}
        /> */}
        <CachedImage
          uri={item.imageURL} 
          style={{width: wp(98), height: hp(50), borderRadius: 55}}
          // sharedTransitionTag={item.strMeal}
        />
      </Animated.View>

      {/* Recipe title and origin */}
        <Animated.View entering={FadeIn.delay(100).duration(1000)} className='mx-4 mb-1 space-y-2 pb-2'>
        <Text style={{fontSize: hp(3)}} className='font-bold flex-1 text-neutral-950'>{item.title}</Text>
        <Text style={{fontSize: hp(2)}} className='font-semibold flex-1 text-neutral-800'>{`$${item.pricing.totalPrice} RECIPE / $${item.pricing.servingPrice} SERVING`}</Text>
        </Animated.View>

      {/* Return to HomeScreen / back button */}
      <Animated.View entering={FadeIn.duration(1000)} className='w-full absolute flex-row justify-between items-center pt-14'>
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
      </Animated.View>

      {/* Key Details Section: Cooktime, Calories, Serving Size, Difficulty */}
        <Animated.View entering={FadeInRight.delay(300).duration(700).springify().damping(12)} className='flex-row pt-4 mx-4 justify-evenly'>
            <RecipeKeyDetail value={item.time.totalTime} unit={'Mins'} iconType='time'/>
            <RecipeKeyDetail value={item.servings} unit={'People'} iconType='servings'/>
            <RecipeKeyDetail value={item.calories} unit={'kCal'} iconType='calories'/>
        </Animated.View>

        <Animated.View entering={FadeInLeft.delay(300).duration(700).springify().damping(12)} className='flex-row pt-2 mx-4 justify-evenly'>
            <RecipeKeyDetail value={'Protein'} unit={`${item.macros.protein}g`} iconType='difficulty'/>
            <RecipeKeyDetail value={'Carbs'} unit={`${item.macros.carb}g`} iconType='difficulty'/>
            <RecipeKeyDetail value={'Fat'} unit={`${item.macros.fat}g`} iconType='difficulty'/>
        </Animated.View>
      
      {/* Ingredients list section */}
      <Animated.View entering={FadeInLeft.delay(400).duration(700).springify()} className='mx-4 space-y-2 pt-10'>
        <Text style={{fontSize: hp(2.5)}} className='font-bold flex-1 text-neutral-800'>Ingredients</Text>
        {
          item.ingredients.map((ingredient, i) => {
            return(
              <View key={i} className='flex-row space-x-4 items-center mx-2'>
                <View style={{width: hp(1.5), height: hp(1.5)}} className='flex rounded-full bg-amber-400 p-1'> 
                  <View style={{width: hp(1.5), height: hp(1.5)}} className='flex rounded-full bg-amber-200'/>
                </View>
                <View className='flex-row space-x-1'>
                  <Text style={{fontSize: hp(1.8)}} className='font-bold flex text-neutral-700'>{ingredient.measurement + ' ' + ingredient.unit}</Text>
                  <Text style={{fontSize: hp(1.8)}} className='font-semibold flex text-neutral-600'>{ingredient.name}</Text>
                </View>
              </View>
            )
          })
        }
      </Animated.View>
      

      {/* Preparation times section */}
      <View className='mx-4 pt-10'>
        <Text style={{fontSize: hp(2.5)}} className='font-bold flex-1 text-neutral-800'>Timings</Text>
        <DataTable>
          <DataTable.Header className='items-center'>
                <View>
                    <ClockIcon size={hp(3)} strokeWidth={1} color={'rgba(251, 191, 36, 0.8)'} stroke={'black'}/> 
                </View>
                <DataTable.Title numeric>PREP (mins)</DataTable.Title>
                <DataTable.Title numeric>COOK (mins)</DataTable.Title>
                <DataTable.Title numeric>TOTAL (mins)</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            {
                cookTimes.map((item, i) => {
                    return(
                        <DataTable.Cell key={i}>
                            <DataTable.Cell numeric>{`${item}`}</DataTable.Cell>
                        </DataTable.Cell>
                    )
                })
            }
          </DataTable.Row>
        </DataTable>
        {/* <View className='pt-2'><Text style={{fontSize: hp(1.5)}} className='font-semibold flex-1 text-neutral-600'>{item.instructions}</Text></View> */}
      </View>

      {/* Instructions section */}
      <View className='mx-4 space-y-2 pt-10'>
        <Text style={{fontSize: hp(2.5)}} className='font-bold flex-1 text-neutral-800'>Instructions</Text>
        <View className='space-y-2'>
            {
                numberedInstructions.map((instruction, i) => {
                    return(
                        <View key={i} className='space-x-4 mx-4'>
                            {
                                instruction? 
                                <View className='flex-row space-x-2'>
                                    <MaterialCommunityIcons name={`numeric-${i+1}-box-multiple`} size={24} color='rgb(45 42 50)' />
                                    <Text style={{fontSize: hp(1.8)}} className='font-semibold flex text-neutral-600 text-left' >{instruction}</Text>
                                </View>
                                : ''
                            }
                        </View>
                    )
                })
            }
        </View>
      </View>

      {/* Recipe instruction video */}
      {/* { recipe.strYoutube &&
        <View className='mx-4 space-y-1 pt-3'>
          <Text style={{fontSize: hp(2.5)}} className='font-bold flex-1 text-neutral-800'>Recipe Video Instructions</Text>
          <View>
            <YoutubeIframe 
              videoId={getYoutubeVideoID(recipe.strYoutube)}
              height={hp(30)}
            />
          </View>
        </View>
      } */}
    </ScrollView>
  )
}