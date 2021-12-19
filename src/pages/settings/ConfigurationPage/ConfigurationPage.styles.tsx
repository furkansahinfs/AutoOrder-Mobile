import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  text: {
    fontSize: scale(30),
    fontWeight: 'normal',
    color: 'black',
  },
  touchableText: {
    height: '30%',
    borderRadius: scale(30),
    margin: '5%',
    backgroundColor: 'darkorange',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: scale(10),
    },
    elevation: scale(10),
    zIndex: 1,
    shadowOpacity: 0.8,
  },

  safeAreaView: {
    flex: 1,
  },

  view: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default styles;
