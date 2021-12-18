import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: '100%',
    width: '100%',
  },
  ImageSections: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    paddingHorizontal: scale(5),
    paddingVertical: scale(5),
    justifyContent: 'center',
  },
  images: {
    alignSelf: 'center',
    width: scale(200),
    height: scale(200),
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: scale(3),
  },
  btnParentSection: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scale(10),
  },
});

export default styles;
