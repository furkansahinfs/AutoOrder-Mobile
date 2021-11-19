import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  bottomBar: {height: window.height * 0.08},
  iconSize: {height: (window.height / window.width) * 13},
});

export default styles;
