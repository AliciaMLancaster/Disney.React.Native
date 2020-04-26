// SYSTEM IMPORTS
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// USER IMPORTS
import Screen2 from './screens/screen2';
import Home from './screens/HomeScreen';
import Parks from './screens/ParksScreen';
import ParkDetailScreen from './screens/ParkDetailScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Parks"
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: '#008080',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'lightblue', paddingTop: 20 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Parks"
        component={Parks}
        options={{ tabBarLabel: 'Parks' }}
      />
      <Tab.Screen
        name="Screen 2"
        component={Screen2}
        options={{ tabBarLabel: 'Screen 2' }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="ParkDetailScreen" component={ParkDetailScreen} />
    </Stack.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

export default AppNavigation;
