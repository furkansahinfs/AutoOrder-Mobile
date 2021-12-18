import React from 'react';
import { View, Text } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { LogoutRequest, ProfileInfo, ProfilePicture } from '../../../api';
import { deleteUserCredentials, loadThemeToRedux, setTheme } from '../../../helpers';
import { Toast } from '../../../components';
import styles from './ConfigurationPage';
import { I18N } from '../../../locales';
import { navigationReset } from '../../../navigation';



/**
 * Get profile information from api
 *
 */
export async function getProfileData() {
  return await ProfileInfo();
}
