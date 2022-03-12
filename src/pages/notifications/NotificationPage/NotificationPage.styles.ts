import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  cardView: {
    paddingVertical: scale(25),
  },

  closeIcon: {
    marginLeft: scale(25),
    marginTop: scale(25),
  },

  headerText: {
    margin: scale(25),
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: scale(13),
    color: 'white',
  },

  labelHead: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: scale(25),
  },

  labelInfo: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: scale(25),
  },

  labelView: {
    marginVertical: scale(25),
    paddingHorizontal: scale(25),
  },

  tabStyles: {
    flex: 1,
  },

  view: {
    width: '100%',
    flex: 1,
  },
});

export default styles;
