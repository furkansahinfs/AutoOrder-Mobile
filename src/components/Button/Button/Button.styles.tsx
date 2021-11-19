import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    width: window.width * 0.7,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default styles;
