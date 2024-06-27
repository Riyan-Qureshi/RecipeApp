import { View, Text } from 'react-native'
import React from 'react'
import { ClockIcon, FireIcon } from 'react-native-heroicons/outline'
import { Square3Stack3DIcon, UsersIcon } from 'react-native-heroicons/solid'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface IconList {
    name: string
    icon: any
}

const iconList: any = {
    time: { icon: <ClockIcon size={hp(4)} strokeWidth={3} color={'#2D2A32'}/>},
    servings: { icon: <UsersIcon size={hp(4)} strokeWidth={3} color={'#2D2A32'}/>},
    calories: { icon: <FireIcon size={hp(4)} strokeWidth={2} color={'#2D2A32'}/>},
    difficulty: { icon: <Square3Stack3DIcon size={hp(4)} strokeWidth={3} color={'gray'}/>}
}

const macrosList: any = {
    protein: { color: 'bg-zinc-800'},
    fat: { color: 'bg-zinc-800'},
    carbs: { color: 'bg-zinc-800'}
}

export default function RecipeKeyDetail({value, unit, iconType}:{value: number | string, unit: string, iconType: string}) {
  { 
    if (typeof value == 'string') {
      return (
        <View className={'flex rounded-full p-3 space-y-2 items-center ' + macrosList[value.toLowerCase()].color}>
              <View className='flex rounded-full items-center'>
                <Text style={{fontSize: hp(2), width: hp(7)}} className='font-bold text-neutral-300 text-center'>{value}</Text>
                <Text style={{fontSize: hp(1.5)}} className='font-bold text-neutral-300'>{unit}</Text>
              </View>
        </View>
      )
    }
    return (
      <View className='flex rounded-full bg-amber-400 p-3 space-y-2 items-center'>
            <View className='flex rounded-full bg-white p-1'>
              {iconList[iconType].icon}
            </View>
            <View className='flex rounded-full items-center'>
              <Text style={{fontSize: hp(2)}} className='font-bold text-neutral-700'>{value}</Text>
              <Text style={{fontSize: hp(1.4)}} className='font-bold text-neutral-700'>{unit}</Text>
            </View>
      </View>
    )
  }
}