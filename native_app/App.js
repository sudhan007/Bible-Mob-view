import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

//screen
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import Search from './src/screens/Search';
import Address from './src/screens/Addess';
import Notifiation from './src/screens/Notification';
import Detail from './src/screens/Detail';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'home' : 'home'}
              size={24}
              color={focused ? 'red' : 'gray'}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'search' : 'search'}
              size={24}
              color={focused ? 'red' : 'gray'}
            />
          ),
        }}
        name="Search"
        component={Search}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Search"
          component={Search}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Detail"
          component={Detail}
        />
        <Stack.Screen
          // options={{headerShown: false}}
          name="Notification"
          component={Notifiation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
