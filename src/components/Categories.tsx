import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
// import { mockData } from '../constants/MockFoodData'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import Animated, { FadeInRight, FadeOut } from 'react-native-reanimated';

interface Props {
    categories: any
    activeCategory: string
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function Categories({categories, activeCategory, setActiveCategory}: Props) {
  return (
    <Animated.View entering={FadeInRight.duration(8000).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='space-x-4'
      >
        {
            categories.map((category: any, index: number) => {
                let isActive:boolean = category.strCategory==activeCategory
                let selectedButtonStyle: string = isActive? 'bg-amber-400':'bg-black/10' 
                return(
                    <TouchableOpacity
                        key={index} 
                        onPress={() => {setActiveCategory(category.strCategory)}}
                        className='flex items-center justify-center space-y-1'
                    >
                        <View style={{padding: hp(1)}} className={'rounded-full '+selectedButtonStyle}>
                            <Image 
                                source={{uri: category.strCategoryThumb}}
                                style={{width: hp(6), height: hp(6)}}
                                className='rounded-full'
                            />
                        </View>
                        <Text className='font-bold text-neutral-600' style={{fontSize: hp(1.6)}}>
                            {category.strCategory}
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </Animated.View>
  )
}