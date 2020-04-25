import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Parks from './screens/ParksScreen';
import Details from './screens/detailscreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Screen 1"
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: '#008080',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'pink', paddingTop: 20 },
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
  const isParkSelected = () => {
    if (selectedPark) {
      return <Stack.Screen name="Details" component={Details} />;
    } else {
      return <MyTabs />;
    }
  };
  return <Stack.Navigator>{isParkSelected()}</Stack.Navigator>;
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default AppNavigation;
