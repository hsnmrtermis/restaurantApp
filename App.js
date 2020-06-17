import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import City from './src/City'
import Restaurants from './src/Restaurants'
import RestaurantDetail from './src/RestaurantDetail';
const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={City} options={{headerShown:false}} />
        <Stack.Screen name="Restaurants" component={Restaurants} options={{title:'Restoranlar'}}  />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} options={{title:'Restoran Detay Sayfası'}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;