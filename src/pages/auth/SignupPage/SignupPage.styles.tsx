import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
  },

  welcomeText: {
    marginTop: window.height * 0.01,
    marginBottom: window.height * 0.04,
    marginHorizontal: '6%',
  },

  welcomeTextView: {
    marginVertical: window.height * 0.08,
  },
});

export default styles;
