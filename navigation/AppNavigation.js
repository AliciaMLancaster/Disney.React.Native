// SYSTEM IMPORTS
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// USER IMPORTS
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
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
        style: { backgroundColor: 'pink', paddingTop: 20 }
      }}
    >
      <Tab.Screen
        name="Screen 1"
        component={Screen1}
        options={{ tabBarLabel: 'Screen 1' }}
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
