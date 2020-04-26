// SYSTEM IMPORTS
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// USER IMPORTS
import Rides from './screens/RideScreen';
import Home from './screens/HomeScreen';
import Parks from './screens/ParksScreen';
import ParkDetailsScreen from './screens/ParkDetailScreen';
import RideDetailsScreen from './screens/RideDetailsScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        name="Rides"
        component={Rides}
        options={{ tabBarLabel: 'Rides' }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="ParkDetailsScreen" component={ParkDetailsScreen} />
      <Stack.Screen name="RideDetailsScreen" component={RideDetailsScreen} />
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
