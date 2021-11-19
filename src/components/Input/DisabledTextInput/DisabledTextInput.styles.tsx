import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: (window.height / window.width) * 5,
    paddingHorizontal: window.width * 0.05,
    alignSelf: 'center',
  },
});

export default styles;
