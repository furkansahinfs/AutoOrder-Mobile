import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');

const styles = StyleSheet.create({
  halfBox: {
    width: '80%',
    alignSelf: 'center',
  },

  headerView: {
    height: window.height * 0.09,
    width: window.width * 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3454fc',
  },

  iconSize: {
    height: (window.height / window.width) * 20,
  },

  image: {
    width: window.width * 0.2,
    height: window.height * 0.2,
    aspectRatio: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  labelIcon: {
    width: window.width * 0.1,
    marginRight: window.width * 0.05,
    alignSelf: 'center',
  },

  labelTextsBox: {
    flexDirection: 'row',
    width: window.width * 0.7,
  },

  nodata: {
    alignSelf: 'center',
    marginTop: window.height * 0.35,
  },

  textView: {
    marginLeft: '20%',
    width: '60%',
    alignItems: 'center',
  },

  view: {
    width: window.width * 1,
    height: '100%',
  },
  safeAreaView: {
    backgroundColor: '#3454fc',
  },
});

export default styles;
