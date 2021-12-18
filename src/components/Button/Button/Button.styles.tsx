import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
    paddingHorizontal: scale(2),
  },
  marginTop: {
    marginTop: scale(3),
  },
  width: {
    width: '70%',
  },
});

export default styles;
