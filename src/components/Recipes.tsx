import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { CachedImage } from '../helpers/CachedImage';

export default function Recipes(meals: any) {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={{fontSize: hp(3)}} className='font-semibold text-neutral-600 mb-2'>Recipes</Text>
            <View>
                <MasonryList
                    data={meals.meals}
                    keyExtractor={(item): string => item.idMeal} 
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, i}) => <RecipeCard item={item} index={i} navigation={navigation}/>}
                    onEndReachedThreshold={0.1}
                />
            </View>
        </View>
    )
}

const RecipeCard = ({item, index, navigation}:{item: any, index: number, navigation: any}) => {
    const isEven: boolean = index%2==0
    const cardMargin: string = isEven? 'pr-2':'pl-2'
    const overlayMargin: string = isEven? 'left-2':'left-4'
    const {strMealThumb, strMeal, idMeal} = item
    return(
        <Animated.View 
            entering={FadeInRight.duration(500).delay(100*index).springify()}
            className={''}
        >
            <Pressable
                style={{width: '100%'}}
                className={'flex justify-center mb-4 space-y-1 '+cardMargin}
                onPress={() => navigation.navigate('Recipe', {item})}
            >
                {/* <Image 
                source={{uri: strMealThumb}} 
                className={'rounded-3xl bg-black/10'} 
                style={{width: '100%', height: index%3==0? hp(25):hp(35)}}
                /> */}
            
                <CachedImage
                    uri={strMealThumb} 
                    className={'rounded-3xl bg-black/10'} 
                    style={{width: '100%', height: index%3==0? hp(25):hp(35)}}
                    // sharedTransitionTag={strMeal}
                />

                {/* Image overlay: price per serving */}
                {/* <View className={'flex absolute bg-white p-1 bottom-8 '+overlayMargin}>
                    <Text style={{fontSize: hp(1.4)}} className='font-bold'>{`$20.00 RECIPE / $5.00 SERVING`}</Text>
                </View>  */}

                <Text style={{fontSize: hp(1.8)}} className='text-neutral-600'>
                    {strMeal.length>19? strMeal.slice(0,19)+'...':strMeal}
                </Text>
                <Text style={{fontSize: hp(1.2)}} className=' text-neutral-800 font-bold'>
                    {`$20.00 RECIPE / $5.00 SERVING`}
                </Text>
            </Pressable>
        </Animated.View>
    )
}