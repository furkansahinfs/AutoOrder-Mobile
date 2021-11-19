import React from 'react';
import {Text, View} from 'react-native';
import {GetNotificationWithId, ReadNotification} from '../../../api';
import {NotificationEntity} from '../../../assets/interfaces';
import {useTheme} from '../../../theme';
import styles from './NotificationPage.styles';

/**
 * The function gets the notification from api
 * if the sent_by is "OneSignal" to reach API index of notification.
 * And if notification is unread, update read value
 */
export async function init(notification: NotificationEntity) {
  let id = notification.id;
  if (notification.sent_by === 'OneSignal') {
    const dbNotification = await GetNotificationWithId(notification.id.toString());
    if (dbNotification !== null) {
      id = dbNotification.id;
    }
  }
  if (!notification.read) {
    await ReadNotification(id.toString());
  }
}

interface Props {
  labelHead: string;
  labelInfo: string | undefined | null;
}

export const LabelView = ({labelHead, labelInfo}: Props) => {
  const {colors} = useTheme();
  if (typeof labelInfo !== 'string') {
    return null;
  }
  return (
    <View style={styles.labelView}>
      <Text style={[styles.labelHead, {color: colors.text}]}>{labelHead}</Text>
      <Text style={[styles.labelInfo, {color: colors.text}]}>{labelInfo}</Text>
    </View>
  );
};

/**
 * The function is for the BackButton of NotificationPage.
 * If app is in the background, navigate user to the Splash (means Login or Main)
 * If app is in the foreground, go back in navigation
 * @param navigation useTheme();
 */
export function navigateTo(navigation: any) {
  if (navigation.canGoBack()) {
    navigation.goBack();
  } else {
    navigation.navigate('Splash');
  }
}
