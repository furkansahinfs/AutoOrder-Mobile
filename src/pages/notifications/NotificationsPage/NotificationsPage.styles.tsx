import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  halfBox: {
    width: '80%',
    alignSelf: 'center',
  },

  iconSize: {
    height: scale(20),
  },

  image: {
    width: scale(150),
    height: scale(150),
    aspectRatio: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  labelIcon: {
    width: '10%',
    marginRight: scale(20),
    alignSelf: 'center',
  },

  labelTextsBox: {
    flexDirection: 'row',
    width: '70%',
  },

  nodata: {
    alignSelf: 'center',
  },

  textView: {
    marginLeft: '20%',
    width: '60%',
    alignItems: 'center',
  },

  view: {
    width: '100%',
    height: '100%',
  },
  safeAreaView: {
    backgroundColor: '#3454fc',
  },
});

export default styles;
