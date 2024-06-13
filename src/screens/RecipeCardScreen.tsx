import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import RecipeKeyDetail from '../utilities/RecipeKeyDetail'
import YoutubeIframe from 'react-native-youtube-iframe'
import { CachedImage } from '../helpers/Image'

export default function RecipeCardScreen(mealData: any) {
  const item = mealData.route.params.item
  const [isFavourite, setFavourite] = useState(false)
  const navigation = useNavigation()
  const [recipe, setRecipe] = useState([])

  const fetchRecipes = async (id: number) => {
      try{
          const res = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          if (res && res.data) {
              setRecipe(res.data.meals[0])
          }
      } catch(err) {
          console.log('Could not fetch meal recipe data')
      }
  }

  useEffect(() => {
    fetchRecipes(item.idMeal)
  }, [])

  const ingredientIndices = (mealData: any) => {
    if(!mealData) return []
    let indexes: number[] = []
    for(let i: number = 1; i<20; i++) {
      if(recipe['strIngredient'+i]) {
        indexes.push(i)
      }
    }
    return (indexes) 
  }

  const getYoutubeVideoID = (url: string) => {
    const regex: RegExp = /[?&]v=([^&]+)/;
    const match: RegExpMatchArray | null = url.match(regex)
    if (match && match[1]) {
      return match[1]
    }
    return undefined
  }

  return (
    <ScrollView 
      className='flex-1 bg-white mx-1 my-1'
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="light" />

      {/* Recipe image */}
      <View className='justify-center mb-4'>
        {/* <Image 
          source={{uri: item.strMealThumb}}
          style={{width: wp(98), height: hp(50), borderRadius: 55}}
        /> */}
        <CachedImage
          uri={item.strMealThumb} 
          style={{width: wp(98), height: hp(50), borderRadius: 55}}
          // sharedTransitionTag={item.strMeal}
        />
      </View>

      {/* Recipe title and origin */}
      <View className='mx-4 mb-1 space-y-2'>
        <Text style={{fontSize: hp(3)}} className='font-bold flex-1 text-neutral-950'>{recipe.strMeal}</Text>
        <Text style={{fontSize: hp(2)}} className='font-semibold flex-1 text-neutral-800'>{recipe.strArea}</Text>
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

      {/* Key Deatils Section: Cooktime, Calories */}
      <View className='flex-row pt-2 mx-4 justify-evenly'>
        <RecipeKeyDetail value={35} unit={'Min'} iconType='time'/>
        <RecipeKeyDetail value={3} unit={'People'} iconType='servings'/>
        <RecipeKeyDetail value={100} unit={'kCal'} iconType='calories'/>
        <RecipeKeyDetail value={1} unit={'Easy'} iconType='difficulty'/>
      </View>
      
      {/* Ingredients list section */}
      <View className='mx-4 space-y-1 pt-3'>
        <Text style={{fontSize: hp(2.5)}} className='font-bold flex-1 text-neutral-800'>Ingredients</Text>
        {
          recipe?
          ingredientIndices(recipe).map((i) => {
            return(
              <View key={i} className='flex-row space-x-4 items-center mx-2'>
                <View style={{width: hp(1.5), height: hp(1.5)}} className='flex rounded-full bg-amber-400 p-1'> 
                  <View style={{width: hp(1.5), height: hp(1.5)}} className='flex rounded-full bg-amber-200'/>
                </View>
                <View className='flex-row space-x-2'>
                  <Text style={{fontSize: hp(1.8)}} className='font-bold flex text-neutral-700'>{recipe['strMeasure'+i]}</Text>
                  <Text style={{fontSize: hp(1.8)}} className='font-semibold flex text-neutral-600'>{recipe['strIngredient'+i]}</Text>
                </View>
              </View>
            )
          }):
          <ActivityIndicator size={'large'} color={'rgba(251, 191, 36, 0.8)'}/>
        }
      </View>
      

      {/* Instructions section */}
      <View className='mx-4 space-y-1 pt-3'>
        <Text style={{fontSize: hp(2.5)}} className='font-bold flex-1 text-neutral-800'>Instructions</Text>
        {
          recipe?
          <Text style={{fontSize: hp(1.5)}} className='font-semibold flex-1 text-neutral-600'>{recipe.strInstructions}</Text>:
          <ActivityIndicator size={'large'} color={'rgba(251, 191, 36, 0.8)'}/>
        }
      </View>

      {/* Recipe instruction video */}
      { recipe.strYoutube &&
        <View className='mx-4 space-y-1 pt-3'>
          <Text style={{fontSize: hp(2.5)}} className='font-bold flex-1 text-neutral-800'>Recipe Video Instructions</Text>
          <View>
            <YoutubeIframe 
              videoId={getYoutubeVideoID(recipe.strYoutube)}
              height={hp(30)}
            />
          </View>
        </View>
      }
    </ScrollView>
  )
}