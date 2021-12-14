import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: scale(10),
    paddingHorizontal: scale(5),
    alignSelf: 'center',
  },
});

export default styles;
