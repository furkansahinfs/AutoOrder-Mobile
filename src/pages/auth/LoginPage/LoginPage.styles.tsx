import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  forgetPasswordAndActivation: {
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    fontWeight: 'normal',
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: '1%',
    fontSize: (window.height / window.width) * 9,
  },

  mainView: {
    height: '100%',
  },

  welcomeText: {
    marginVertical: window.height * 0.015,
    marginHorizontal: '6%',
  },

  view: {
    marginVertical: window.height * 0.09,
  },
});

export default styles;
