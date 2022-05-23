import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  cardBottomDetail: {
    paddingVertical: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
  },

  cardItem: {
    marginHorizontal: scale(5),
    marginVertical: scale(7.5),
    flex: 1,
  },

  cardLocationView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: scale(10),
    flex: 1,
  },

  cardOverride: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0,
    width: '95%',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
  },

  detailLabel: {
    fontWeight: 'normal',
    fontSize: scale(13),
  },

  image: {
    alignSelf: 'center',
    width: '90%',
    height: scale(120),
    margin: scale(10),
    borderRadius: scale(10),
  },

  itemImage: {
    alignSelf: 'center',
    width: '35%',
    height: scale(100),
    margin: scale(10),
    borderRadius: scale(80),
  },

  locationLabel: {
    fontWeight: 'normal',
    fontSize: scale(12),
    marginBottom: scale(4),
    marginHorizontal: scale(5),
  },

  titleLabel: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: scale(15),
    marginLeft: scale(10),
  },

  touchableItem: {
    paddingVertical: scale(5),
  },
});

export default styles;
