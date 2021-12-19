import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
  },

  editIcon: {
    top: scale(20),
  },

  icon: {
    zIndex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: scale(5),
    borderRadius: scale(10),
  },

  image: {
    width: scale(150),
    height: scale(150),
    aspectRatio: 1,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: scale(5),
    borderRadius: scale(40),
  },

  imageView: {
    alignSelf: 'center',
    marginVertical: scale(20),
  },

  labelHead: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: scale(13),
  },

  labelInfo: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: scale(11),
  },

  labelView: {
    width: '75%',
    paddingVertical: scale(10),
    paddingHorizontal: scale(30),
  },

  leftIcons: {
    position: 'absolute',
    top: scale(10),
    left: scale(10),
  },

  rightIcons: {
    position: 'absolute',
    top: scale(10),
    right: scale(10),
  },

  profileDataView: {
    flexGrow: 1,
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    paddingTop: scale(21),
  },

  saveIcon: {
    bottom: scale(10),
  },
  scrollView: {
    flex: 1,
    height: '100%',
  },

  theme: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: scale(10),
    padding: scale(10),
    marginVertical: scale(20),
  },

  themeText: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },

  topView: {
    backgroundColor: '#3454fc',
  },

  safeAreaView: {
    flex: 1,
  },
});

export default styles;
