import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: window.width * 0.05,
    top: window.height * 0.025,
    zIndex: 1,
  },
  iconSize: {
    height: (window.height / window.width) * 16,
  },
});

export default styles;
