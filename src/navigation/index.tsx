import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import HomeScreen from '../screens/HomeScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import RecipeCardScreen from '../screens/RecipeCardScreen'
import CustomRecipeCardScreen from '../screens/CustomRecipeCardScreen'

const Stack = createNativeStackNavigator()

export default class Navigation extends Component {
  render() {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} type="replace"/>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Recipe" component={RecipeCardScreen} />
          <Stack.Screen name='CustomRecipe' component={CustomRecipeCardScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
  }
}