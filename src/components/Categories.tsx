import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { mockData } from '../constants/MockFoodData'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Categories() {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='space-x-4'
        contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            mockData.map((cat, index) => {
                return(
                    <TouchableOpacity
                        key={index} 
                        className='flex items-center justify-center space-y-1'
                    >
                        <View className='rounded-full' style={{padding: hp(1)}}>
                            <Image 
                                source={{uri: cat.image}}
                                style={{width: hp(6), height: hp(6)}}
                                className='rounded-full'
                            />
                        </View>
                        <Text className='font-bold text-neutral-600' style={{fontSize: hp(1.6)}}>
                            {cat.name}
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  )
}