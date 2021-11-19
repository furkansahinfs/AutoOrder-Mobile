import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  cardView: {
    paddingVertical: '5%',
  },

  closeIcon: {
    marginLeft: '2.5%',
    marginTop: '2.5%',
  },

  headerText: {
    margin: '5%',
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: (window.height / window.width) * 10,
    color: 'white',
  },

  labelHead: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: (window.height / window.width) * 8,
  },

  labelInfo: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: (window.height / window.width) * 9,
  },

  labelView: {
    marginVertical: window.height * 0.015,
    paddingHorizontal: window.width * 0.05,
  },

  tabStyles: {
    flex: 1,
  },

  view: {
    width: window.width * 1,
    flex: 1,
  },
});

export default styles;
