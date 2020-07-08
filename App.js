import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './Comonents/Screen1';
import Screen2 from './Comonents/Screen2';
import Screen3 from './Comonents/Screen3';
import Screen4 from './Comonents/Screen4';
import Header_Component from './Comonents/Header_component';
import ShimmerView from './Comonents/ShimmerView';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        
        <Stack.Navigator screenOptions={{
          headerShown: true
        }} >
          
          <Stack.Screen name="WhatsApp" component={TAB_NAVIGATION}
            options={{
              headerTitle: props => <Header_Component />,
              headerStyle: {
                backgroundColor: 'powdergrey',
                height:170,               
               elevation:0,
                           },
              headerTintColor: 'powdergrey',
              headerTitleStyle: {
                fontWeight: 'bold',
                             },
                }} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

function TAB_NAVIGATION() {
  return (
    <Tab.Navigator
      //  tabBarComponent={ Header_Component}
      tabBarOptions={{
        labelStyle: { fontSize: 11.3 },
        tabStyle: { width: 114 },
        style: { backgroundColor: 'powdergrey' },
        scrollEnabled: true,
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        pressColor: 'pink',
      }}>
      <Tab.Screen name="ShimmerView" component={ShimmerView} />
      <Tab.Screen name="Trending" component={Screen1} />
      <Tab.Screen name="Potato Chips" component={Screen2} />
      <Tab.Screen name="Crisps & Puffs" component={Screen3} />
      <Tab.Screen name="Potato" component={Screen4} />
     
    </Tab.Navigator>
  );
}