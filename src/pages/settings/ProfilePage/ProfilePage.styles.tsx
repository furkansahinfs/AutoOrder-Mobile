import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
  },

  editIcon: {
    top: window.height * 0.05,
  },

  icon: {
    zIndex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 7,
    borderRadius: (window.height / window.width) * 10,
  },

  image: {
    width: window.width * 0.25,
    height: window.height * 0.25,
    aspectRatio: 1,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: window.height * 0.1,
  },

  imageView: {
    alignSelf: 'center',
    marginVertical: window.height * 0.025,
  },

  labelHead: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: (window.height / window.width) * 7,
  },

  labelInfo: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: (window.height / window.width) * 8,
  },

  labelView: {
    width: window.width * 0.75,
    marginVertical: window.height * 0.005,
    paddingVertical: window.height * 0.01,
    paddingHorizontal: window.width * 0.05,
  },

  rightIcons: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  profileDataView: {
    height: '100%',
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: window.height * 0.04,
  },

  saveIcon: {
    bottom: window.height * 0.05,
  },

  leftIcons: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  theme: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    marginVertical: window.height * 0.02,
  },

  themeText: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },

  view: {
    width: window.width * 1,
    height: '100%',
    backgroundColor: '#3454fc',
  },
  safeAreaView: {
    backgroundColor: '#3454fc',
    flex: 1,
  },
});

export default styles;
