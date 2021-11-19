import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: (window.height / window.width) * 7,
    paddingHorizontal: window.width * 0.05,
    marginBottom: window.height * 0.01,
    alignSelf: 'center',
  },
  iconSize: {
    height: (window.height / window.width) * 8,
  },
});

export default styles;
