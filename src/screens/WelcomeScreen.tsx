import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Animated, { SharedValue, useSharedValue, withSpring } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
  const ringPadding1: SharedValue<number> = useSharedValue(0)
  const ringPadding2: SharedValue<number> = useSharedValue(0)

  const navigation = useNavigation()

  useEffect(() => {
    ringPadding1.value = 0
    ringPadding2.value = 0
    setTimeout(() => ringPadding1.value = withSpring(ringPadding1.value + hp(4.5)), 100)
    setTimeout(() => ringPadding2.value = withSpring(ringPadding2.value + hp(4)), 300)

    setTimeout(() => navigation.navigate('Home'), 2500) 
  }, [])

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />
      
      {/* Logo Image with ring outlines */}
      <Animated.View className="bg-white/20 rounded-full" style={{padding: ringPadding1}}>
        <Animated.View className="bg-white/20 rounded-full" style={{padding: ringPadding2}}>
          <Image source={require("../../assets/bagel.png")} 
            style={{width: hp(20), height: hp(20)}}
          />
        </Animated.View>
      </Animated.View>

      {/* Title and slogan */}
      <View className='flex items-center space-y-2'>
          <Text className='flex font-bold text-white tracking-widest' style={{fontSize: hp(7)}}>
            Bagelicious
          </Text>
          <Text className='flex font-medium text-white tracking-widest text-lg' style={{fontSize: hp(2)}}>
            Budget Bites
          </Text>
      </View>
    </View>
  )
}