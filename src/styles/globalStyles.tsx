import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const makeStyles = (colors: any) =>
  StyleSheet.create({
    bodyText: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: (window.height / window.width) * 9,
      color: colors.text,
    },

    buttonMargin: {
      marginTop: window.height * 0.03,
    },

    card: {
      backgroundColor: colors.card,
      justifyContent: 'center',
      paddingVertical: '12%',
      borderRadius: 15,
      shadowColor: 'grey',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      elevation: 20,
      zIndex: 1,
      shadowOpacity: 0.27,
    },

    centerText: {
      alignSelf: 'center',
      textAlign: 'center',
      color: colors.text,
    },

    entityLabelView: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      padding: '5%',
      marginVertical: '4%',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      elevation: 10,
      zIndex: 1,
      shadowOpacity: 0.27,
    },

    flexible: {
      flex: 1,
    },

    headText: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: (window.height / window.width) * 14,
      color: colors.text,
    },

    iconSize: {
      height: (window.height / window.width) * 12,
    },

    labelSmaller: {
      fontStyle: 'italic',
      fontWeight: 'normal',
      fontSize: (window.height / window.width) * 7,
      color: colors.text,
    },

    labelBigger: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: (window.height / window.width) * 8,
      color: colors.text,
    },

    modalView: {
      backgroundColor: colors.card,
      padding: window.width * 0.05,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },

    rect: {
      marginVertical: '1%',
      height: 1,
      backgroundColor: '#C6C6C6',
    },

    row: {
      flexDirection: 'row',
    },

    segmentTextWrapperDisabled: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    segmentTextWrapperSelected: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: '#7999FD',
    },

    tabStyles: {
      flexDirection: 'row',
      marginBottom: window.height * 0.04,
    },

    titleDisabled: {
      alignItems: 'center',
      alignContent: 'center',
      fontSize: (window.height / window.width) * 8,
      color: colors.text,
    },

    titleSelected: {
      alignItems: 'center',
      alignContent: 'center',
      fontWeight: 'bold',
      fontSize: (window.height / window.width) * 8,
      color: '#7999FD',
    },
  });

export default makeStyles;
