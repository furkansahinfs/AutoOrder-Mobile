import React from 'react';
import {View, Text} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {GetNotificationCount, LogoutRequest, ProfileInfo, ProfilePicture} from '../../../api';
import {deleteUserCredentials, loadThemeToRedux, setTheme} from '../../../helpers';
import {Toast} from '../../../components';
import styles from './ProfilePage.styles';
import {I18N} from '../../../locales';

export interface PhotoProps {
  uri: string;
  type: string;
  name: string;
}

/**
 * Remove the user credentials from the AsyncStorage
 * and redux, navigate user to the splash screen
 * @param navigation = useNavigation()
 */
export async function logout(navigation: any) {
  await LogoutRequest().then(async (result: any) => {
    if (result === 'Successfull') {
      await deleteUserCredentials();
      navigation.reset({
        index: 0,
        routes: [{name: 'Splash'}],
      });
    } else {
      Toast(result, false);
    }
  });
}

export function getLabel(labelHead: string, labelInfo: string | undefined | null, colors: any) {
  return (
    <View style={styles.labelView}>
      <Text style={[styles.labelHead, {color: colors.text}]}>{labelHead}</Text>
      <Text style={[styles.labelInfo, {color: colors.text}]}>
        {labelInfo ? labelInfo : I18N.t('noInfo')}
      </Text>
    </View>
  );
}

/**
 * Get profile information from api
 *
 */
export async function getProfileData() {
  return await ProfileInfo();
}

/**
 * Get unread notification count from api
 *
 */
export async function getUnreadNotificationCount() {
  return await GetNotificationCount();
}

/**
 * Pick image using DocumentPicker
 * @returns DocumentPickerResponse | null
 */
export async function pickImage() {
  // Pick one file
  try {
    return await DocumentPicker.pickSingle({
      type: [DocumentPicker.types.images],
    });
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
      return null;
    } else {
      return null;
    }
  }
}

/**
 * Send the selected image to the API to save image as profile picture
 * @param photo PhotoProps
 * @returns boolean
 */
export async function setPicture(photo: PhotoProps | undefined) {
  if (photo !== undefined) {
    return await ProfilePicture(photo);
  }
}

/**
 * The function sets theme choice for Redux and AsyncStorage
 * @param isDarkMode boolean
 */
export async function setAppTheme(isDarkMode: boolean) {
  await setTheme(isDarkMode ? 'DARK' : 'LIGHT').then(async () => {
    await loadThemeToRedux();
  });
}
