import React, {useState} from 'react';
import {View, ScrollView, Text, SafeAreaView} from 'react-native';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {BackButton, Button, TextInput} from '../../../components';
import {I18N} from '../../../locales';
import {register, validateSignupInputs} from './SignupPage.helper';
import styles from './SignupPage.styles';
import {stylesGlobal} from '../../../styles/';
import {useTheme} from '../../../theme';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const {colors} = useTheme();
  const globalStyles = stylesGlobal(colors);

  async function signUp() {
    const areSignupInfosValid = validateSignupInputs(email, password, confirmPassword);
    if (areSignupInfosValid) {
      const json = {
        email,
        name: null,
        password,
        phone: null,
        surname: null,
      };
      await register(json, navigation);
    }
  }

  return (
    <SafeAreaView style={{backgroundColor: colors.background}}>
      <View style={[styles.mainView, {backgroundColor: colors.background}]}>
        <ScrollView nestedScrollEnabled={true}>
          <BackButton color={colors.icon} />
          <View style={styles.welcomeTextView}>
            <View style={styles.welcomeText}>
              <Text style={globalStyles.headText}>{I18N.t('signupHead').toUpperCase()}</Text>
              <Text style={globalStyles.bodyText}>{I18N.t('signupBody')}</Text>
            </View>

            <Card containerStyle={globalStyles.card}>
              <View>
                <TextInput
                  func={value => setEmail(value)}
                  iconName={'envelope'}
                  keyboardType={'default'}
                  placeholderText={I18N.t('email')}
                  secureText={false}
                  val={email}
                />

                <TextInput
                  func={value => setPassword(value)}
                  iconName={'key'}
                  keyboardType={'default'}
                  placeholderText={I18N.t('password')}
                  secureText={true}
                  val={password}
                />

                <TextInput
                  func={value => setConfirmPassword(value)}
                  iconName={'key'}
                  keyboardType={'default'}
                  placeholderText={I18N.t('confirmPassword')}
                  secureText={true}
                  val={confirmPassword}
                />

                <View style={globalStyles.buttonMargin}>
                  <Button
                    mode={'contained'}
                    onPressFunction={async () => await signUp()}
                    text={I18N.t('signupButton')}
                  />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

//const [isInfoPage, setIsInfoPage] = useState(false);
//const [name, setName] = useState('');
//const [surname, setSurname] = useState('');
//const [phone, setPhone] = useState('');

/**
   * The function validates the email and password,
   * if validation is successful, render the info page
   * to get name, surname, password

  function goInfoPage() {
    const areSignupInputsValid = validateSignupInputs(
      email,
      password,
      confirmPassword,
    );
    setIsInfoPage(areSignupInputsValid);
  }*/

/**
   * If info inputs are validated, connect to the server and signup user

  async function signUp() {
    const areSignupInfosValid = validateInfoInputs(name, surname);
    if (areSignupInfosValid) {
      const json = {
        email,
        name,
        password,
        phone,
        surname,
      };
      await Register(json, navigation);
    }
  }*/

/*
<View style={{display: isInfoPage === true ? 'flex' : 'none'}}>
  <TextInput
    func={value => setName(value)}
    iconName={'italic'}
    keyboardType={'default'}
    placeholderText={I18N.t('name')}
    secureText={false}
    val={name}
  />

  <TextInput
    func={value => setSurname(value)}
    iconName={'italic'}
    keyboardType={'default'}
    placeholderText={I18N.t('surname')}
    secureText={false}
    val={surname}
  />

  <TextInput
    func={value => setPhone(value)}
    iconName={'phone'}
    keyboardType={'phone-pad'}
    placeholderText={I18N.t('phone')}
    secureText={false}
    val={phone}
  />

  <View style={globalStyles.buttonMargin}>
    <Button
      mode={'contained'}
      text={I18N.t('next')}
      onPressFunction={() => goInfoPage()}
    />
  </View>

  <View style={globalStyles.buttonMargin}>
    <TextButton
      onPressFunction={() => setIsInfoPage(false)}
      text={I18N.t('back')}
    />
  </View>
</View>;
*/
