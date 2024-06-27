import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categoriesList } from '../constants/CustomFoodData'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { FadeInRight, FadeOut } from 'react-native-reanimated';
import { Category } from '../types/recipe';

interface Props {
    activeCategory: string
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function CustomCategories({activeCategory, setActiveCategory}: Props) {
  return (
    <Animated.View entering={FadeInRight.duration(8000).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='space-x-7' // Adjusts space between category icons
      >
        {
            categoriesList.map((category: Category, index: number) => {
                let isActive:boolean = category.name==activeCategory
                let selectedButtonStyle: string = isActive? 'bg-amber-400':'bg-black/10' 
                return(
                    <TouchableOpacity
                        key={index} 
                        onPress={() => {setActiveCategory(category.name)}}
                        className='flex items-center space-y-1'
                    >
                        <View style={{padding: hp(1)}} className={'rounded-full '+selectedButtonStyle}>
                            <Image 
                                source={{uri: category.imageURL}}
                                style={{width: hp(6), height: hp(6)}}
                                className='rounded-full'
                            />
                        </View>
                        <Text className='font-bold text-neutral-600' style={{fontSize: hp(1.6)}}>
                            {category.name}
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </Animated.View>
  )
}