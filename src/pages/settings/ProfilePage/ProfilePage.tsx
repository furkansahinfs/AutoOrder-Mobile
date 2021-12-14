import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { Badge } from 'react-native-elements';
import { getTheme } from '../../../helpers';
import { ActivityIndicator, DefaultIcon, TextButton, Toast } from '../../../components';
import { I18N } from '../../../locales';
import { Images } from '../../../assets';
import {
  getProfileData,
  getLabel,
  logout,
  pickImage,
  setAppTheme,
  setPicture,
  PhotoProps,
} from './ProfilePage.helper';
import styles from './ProfilePage.styles';
import { stylesGlobal } from '../../../styles';
import useTheme from '../../../theme/useTheme';
import { ProfileData } from '../../../assets/interfaces';
import { navigate } from '../../../navigation';

//TODO Refactoring
//TODO Refactoring
//TODO Refactoring

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<ProfileData | null>({
    email: 'email',
    id: 10,
    name: 'string',
    phone: '05012345678',
    profile_picture: null,
    registered_at: 10,
    role: 'string',
    surname: 'string',
  });
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [photo, setPhoto] = useState<PhotoProps>();
  const [isChanged, setIsChanged] = useState(false);
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  useEffect(() => {
    getAppTheme();
    (async () => {
      //await fetchProfile();
    })();
  }, []);

  const onToggleSwitch = async () => {
    await setAppTheme(!isDarkModeOn).then(() => {
      getAppTheme();
    });
  };

  /**
   * The function gets theme choice from Redux
   */
  function getAppTheme() {
    const reduxTheme = getTheme();
    setIsDarkModeOn(reduxTheme === 'DARK');
  }

  /**
   * The function gets profile data from API
   * and sets the profilePictureUrl and profileData
   */
  async function fetchProfile() {
    const data = await getProfileData();
    setProfileData(data);
    setProfilePictureUrl(data?.profile_picture);
  }

  /**
   * The function gets the picked image by invoking pickImage() of the helper
   * If result is not null, set necessary things
   * setPhoto is necessary to declare file for when you send file to the API
   * setIsChanged adjusts to show save button.
   */
  async function pick() {
    const result: DocumentPickerResponse | null = await pickImage();
    if (result !== null) {
      //ignore errors, type is wrong in node files
      setProfilePictureUrl(result.uri);
      setPhoto({
        uri: result.uri,
        type: result.type,
        name: result.name,
      });
      setIsChanged(true);
    }
  }

  /**
   * The function tries to save the selected image to the API
   */
  async function save() {
    setShowLoading(true);
    setIsChanged(false);
    const result = await setPicture(photo);
    if (result === true) {
      Toast(I18N.t('profilePage.profilePictureChangeMessage'), false);
      await fetchProfile();
    } else {
      setProfilePictureUrl(profileData?.profile_picture ? profileData?.profile_picture : '');
    }
    setShowLoading(false);
  }

  const labelArray = [
    { text: I18N.t('profilePage.email'), value: profileData?.email },
    { text: I18N.t('profilePage.name'), value: profileData?.name },
    { text: I18N.t('profilePage.surname'), value: profileData?.surname },
    { text: I18N.t('profilePage.phone'), value: profileData?.phone },
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps={'handled'}>
        <View style={styles.rightIcons}>
          <DefaultIcon
            color={'white'}
            name={'angle-double-right'}
            onPressFunction={async () => await logout()}
          />
        </View>
        <View style={styles.leftIcons}>
          <DefaultIcon
            color={'white'}
            name={'envelope-o'}
            onPressFunction={() => navigate('Notifications')}
          />
          <Badge status="success" value={0} containerStyle={styles.badge} />
        </View>

        <View style={styles.imageView}>
          <View style={[styles.icon, styles.editIcon]}>
            <DefaultIcon color={'black'} name={'camera'} onPressFunction={pick} />
          </View>

          <Image
            style={styles.image}
            source={
              profilePictureUrl
                ? {
                    uri: profilePictureUrl,
                  }
                : Images.defaultProfilePicture
            }
          />
          {isChanged && (
            <View style={[styles.icon, styles.saveIcon]}>
              <DefaultIcon color={'black'} name={'cloud-upload'} onPressFunction={save} />
            </View>
          )}
        </View>

        <View style={[styles.profileDataView, { backgroundColor: colors.background }]}>
          {profileData !== null && (
            <View>
              {labelArray.map((label, index) => getLabel(label.text, label.value, colors, index))}

              <View style={globalStyles.rect} />

              <View style={globalStyles.buttonMargin}>
                <TextButton
                  onPressFunction={() => navigate('Language', { page: 'Main' })}
                  text={I18N.t('profilePage.selectLanguage')}
                />
              </View>

              <View style={[styles.theme, { borderColor: colors.border }]}>
                <Text style={globalStyles.centerText}>{I18N.t('profilePage.darkTheme')}</Text>
                <Switch value={isDarkModeOn} onValueChange={onToggleSwitch} />
              </View>
            </View>
          )}

          {(profileData === null || showLoading) && <ActivityIndicator />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
