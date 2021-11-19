import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    padding: window.height * 0.01,
    borderRadius: 20,
  },
  iconStyle: {
    height: (window.height / window.width) * 14,
  },
});

export default styles;
