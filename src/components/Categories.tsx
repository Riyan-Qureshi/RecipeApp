import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { mockData } from '../constants/MockFoodData'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface Props {
    activeCategory: string
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function Categories({activeCategory, setActiveCategory}: Props) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='space-x-4'
        contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            mockData.map((category, index) => {
                let isActive:boolean = category.name==activeCategory
                let selectedButtonStyle: string = isActive? 'bg-amber-400':'bg-black/10' 
                return(
                    <TouchableOpacity
                        key={index} 
                        onPress={() => {setActiveCategory(category.name)}}
                        className='flex items-center justify-center space-y-1'
                    >
                        <View style={{padding: hp(1)}} className={'rounded-full '+selectedButtonStyle}>
                            <Image 
                                source={{uri: category.image}}
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
    </View>
  )
}