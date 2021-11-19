import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonText: {
    width: window.width * 0.7,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;
