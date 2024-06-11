import { StatusBar } from 'expo-status-bar'
import { View, ScrollView, Image, Text, TextInput } from 'react-native'
import React from 'react'
import { BellIcon, MagnifyingGlassCircleIcon, UserCircleIcon } from "react-native-heroicons/outline";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


export default function HomeScreen() {
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
        <View className='mx-4 space-y-2 mb-2'>
          <Text style={{fontSize: hp(1.8)}} className='text-neutral-600'>Hello Riyan,</Text>
          <Text style={{fontSize: hp(3.8)}} className='font-semibold text-neutral-600'>Make your own food,</Text>
          <Text style={{fontSize: hp(3.8)}} className='font-semibold text-neutral-600'>
            stay at <Text className='text-amber-400'>home</Text>
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
      </ScrollView>
    </View>
  )
}