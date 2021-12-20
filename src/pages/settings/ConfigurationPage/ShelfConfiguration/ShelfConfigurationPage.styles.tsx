import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    margin: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardOverride: {
    marginBottom: '5%',
    paddingVertical: '5%',
  },

  flatlist: {
    backgroundColor: 'transparent',
    flexGrow: 1,
  },

  image: {
    width: scale(70),
    height: scale(70),
    aspectRatio: 1,
    alignSelf: 'flex-start',
  },

  nodataImage: {
    width: scale(150),
    height: scale(150),
    aspectRatio: 1,
    alignSelf: 'center',
  },

  nodataView: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  totalSizeText: {
    textAlign: 'right',
    paddingVertical: scale(5),
    paddingHorizontal: scale(20),
    fontWeight: 'bold',
    fontSize: scale(15),
  },

  totalSizeView: {
    paddingVertical: scale(3),
    borderTopWidth: 1,
  },

  safeAreaView: {
    flex: 1,
  },

  view: {
    flex: 1,
  },
});

export default styles;
