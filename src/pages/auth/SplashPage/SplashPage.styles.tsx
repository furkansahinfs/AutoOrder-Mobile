import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');

const styles = StyleSheet.create({
  logo: {
    width: window.height * 0.2,
    height: window.height * 0.2,
    backgroundColor: 'white',
    borderRadius: window.height * 0.05,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  headText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    paddingTop: '4%',
    fontSize: (window.height / window.width) * 14,
    color: 'white',
  },

  view: {
    width: window.width * 1,
    height: window.height * 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3454fc',
  },
});

export default styles;
