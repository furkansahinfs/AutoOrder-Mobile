import * as React from 'react';
import {
  AddressPage,
  ForgetPasswordAndActivationPage,
  LanguagePage,
  LoginPage,
  OrderDetailPage,
  ShelfConfigurationPage,
  SignupPage,
  SplashPage,
} from '../pages';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Splash">
      <Stack.Screen
        name="ForgetPasswordAndActivation"
        component={ForgetPasswordAndActivationPage}
      />
      <Stack.Screen name="Language" component={LanguagePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Main" component={TabNavigation} />
      <Stack.Screen name="Signup" component={SignupPage} />
      <Stack.Screen name="Splash" component={SplashPage} />

      <Stack.Screen name="Address" component={AddressPage} />
      <Stack.Screen name="ShelfConfiguration" component={ShelfConfigurationPage} />
      <Stack.Screen name="OrderDetail" component={OrderDetailPage} />
    </Stack.Navigator>
  );
}

export default MyStack;
