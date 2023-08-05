import {FIREBASE_AUTH} from './firebaseApp/config.js'
import useUser from './hooks/useUser';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/logout/Login.js';
import { useState, useEffect } from 'react';
import LoginStack from './navigatorNav/loginStack';
import LogoutStack from './navigatorNav/logoutStack.js';

const stack = createNativeStackNavigator()

export default function App () {
  const userState = useUser()

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Login'>
        {userState ? 
          <stack.Screen name='LoggedStack' component={LoginStack} options={{headerShown:false}}/>
         : 
          <stack.Screen name='LoginStack' component={LogoutStack} options={{headerShown: false}} />
         }
      </stack.Navigator>
    </NavigationContainer>
  )
}