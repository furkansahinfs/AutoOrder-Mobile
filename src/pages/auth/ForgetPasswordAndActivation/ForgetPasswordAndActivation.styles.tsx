import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
  },

  welcomeText: {
    marginBottom: window.height * 0.05,
    marginHorizontal: '6%',
  },

  view: {
    marginVertical: window.height * 0.13,
  },
});

export default styles;
