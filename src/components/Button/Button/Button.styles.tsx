import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  button: {
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
  },
});

export default styles;
