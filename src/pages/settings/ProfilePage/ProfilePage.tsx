import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { getTheme } from '../../../helpers';
import { ActivityIndicator, DefaultIcon, TextButton, TextInput, Toast } from '../../../components';
import { I18N } from '../../../locales';
import { Images } from '../../../assets';
import {
  getProfileData,
  pickImage,
  setAppTheme,
  PhotoProps,
  saveProfileData,
  logout,
  updateProfileData,
} from './ProfilePage.helper';
import styles from './ProfilePage.styles';
import { stylesGlobal } from '../../../styles';
import useTheme from '../../../theme/useTheme';
import { navigate } from '../../../navigation';

//TODO Refactoring
//TODO Refactoring
//TODO Refactoring

const ProfilePage = () => {
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [photo, setPhoto] = useState<PhotoProps>();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);
  const [isProfileSet, setIsProfileSet] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  useEffect(() => {
    getAppTheme();
    (async () => {
      await fetchProfile();
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
    setShowLoading(true);
    const data = await getProfileData();
    setIsProfileSet(data !== null);
    setName(data?.full_name);
    setPhone(data?.phone);

    setProfilePictureUrl(data?.profile_picture);
    setShowLoading(false);
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
   * The function tries to save the new data to the API
   */
  async function save() {
    setShowLoading(true);
    const newProfileInfo = {
      name,
      phone,
    };
    let result = null;
    if (isProfileSet) {
      result = await updateProfileData(newProfileInfo);
    } else {
      result = await saveProfileData(newProfileInfo);
    }
    if (result === true) {
      Toast(I18N.t('profilePage.profileChangedMessage'), false);
      await fetchProfile();
    } else {
      Toast(result, false);
    }
    setShowLoading(false);
  }

  const labelArray = [
    {
      text: I18N.t('profilePage.name') + ' ' + I18N.t('profilePage.surname'),
      icon: 'user',
      value: name,
      func: (val: string) => setName(val),
    },
    {
      text: I18N.t('profilePage.phone'),
      icon: 'phone',
      value: phone,
      func: (val: string) => setPhone(val),
    },
  ];

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background }]}>
      <ScrollView
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps={'handled'}
        style={styles.scrollView}
      >
        <View>
          <View style={styles.topView}>
            <View style={styles.rightIcons}>
              <DefaultIcon
                color={'white'}
                name={'angle-double-right'}
                onPressFunction={async () => await logout()}
              />
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
          </View>

          <View style={[styles.profileDataView, { backgroundColor: colors.background }]}>
            <View>
              {labelArray.map((element, index) => {
                return (
                  <View key={index} style={styles.textInput}>
                    <TextInput
                      func={(value) => element.func(value)}
                      iconName={element.icon}
                      keyboardType={'default'}
                      placeholderText={element.text}
                      secureText={false}
                      val={element.value}
                    />
                  </View>
                );
              })}

              <View style={globalStyles.buttonMargin}>
                <TextButton onPressFunction={save} text={I18N.t('profilePage.save')} />
              </View>

              <View style={globalStyles.rect} />
              <View style={globalStyles.buttonMargin}>
                <TextButton
                  onPressFunction={() => navigate('Language', { page: 'Main' })}
                  text={I18N.t('profilePage.selectLanguage')}
                />
              </View>
              <View style={globalStyles.buttonMargin}>
                <TextButton
                  onPressFunction={() => navigate('Address')}
                  text={I18N.t('profilePage.changeAddress')}
                />
              </View>
              <View style={[styles.theme, { borderColor: colors.border }]}>
                <Text style={globalStyles.centerText}>{I18N.t('profilePage.darkTheme')}</Text>
                <Switch value={isDarkModeOn} onValueChange={onToggleSwitch} />
              </View>
            </View>

            {showLoading && <ActivityIndicator />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfilePage;
