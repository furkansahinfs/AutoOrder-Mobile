import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  flatListView: {
    paddingBottom: scale(30),
    flexGrow: 1,
  },

  image: {
    width: scale(100),
    height: scale(100),
    aspectRatio: 1,
    alignSelf: 'center',
  },

  nodata: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
});

export default styles;
