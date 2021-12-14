import React, { useEffect } from 'react';
import { StackNavigation } from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store';
import { ONESIGNAL_APP_ID } from '@env';
import OneSignal from 'react-native-onesignal';
import { authAddDevice } from './src/store/auth';

export default function App() {
  useEffect(() => {
    setOneSignal();
  }, []);

  function setOneSignal() {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId(ONESIGNAL_APP_ID);
    //END OneSignal Init Code

    OneSignal.getDeviceState().then((state) => {
      console.log(state);
      console.log('OneSignal Device ID :', state.userId);
      store.dispatch(authAddDevice(state.userId)); // Update deviceId from reducer
    });

    //Prompt for push on iOS
    OneSignal.promptForPushNotificationsWithUserResponse((response: any) => {
      console.log('Prompt response:', response);
    });
    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      (notificationReceivedEvent: {
        getNotification: () => any;
        complete: (arg0: any) => void;
      }) => {
        console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent);
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );
  }

  return (
    <StoreProvider store={store}>
      <NavigationContainer ref={navigationRef}>{StackNavigation()}</NavigationContainer>
    </StoreProvider>
  );
}
