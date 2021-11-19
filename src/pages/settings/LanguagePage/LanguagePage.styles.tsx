import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');

const styles = StyleSheet.create({
  headText: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    paddingTop: '4%',
    fontSize: (window.height / window.width) * 12,
    color: 'white',
  },

  logo: {
    width: window.height * 0.25,
    height: window.height * 0.2,
    marginTop: window.height * 0.15,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: window.height * 0.05,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  view: {
    width: window.width * 1,
    height: window.height * 1,
    alignItems: 'center',
    backgroundColor: '#3454fc',
  },
});

export default styles;
