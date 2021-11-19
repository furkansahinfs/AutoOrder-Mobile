import React from 'react';
import {CheckBox as NativeCheckBox} from 'react-native-elements';
import {useTheme} from '../../theme';
import styles from './CheckBox.styles';

interface CheckboxProps {
  onPressFunction: () => void;
  checked: boolean;
  title: string;
}

const CheckBox = ({onPressFunction, checked, title}: CheckboxProps) => {
  const {colors} = useTheme();
  return (
    <NativeCheckBox
      title={title}
      textStyle={{color: colors.text}}
      containerStyle={styles.box}
      checked={checked}
      onPress={onPressFunction}
    />
  );
};

export default CheckBox;
