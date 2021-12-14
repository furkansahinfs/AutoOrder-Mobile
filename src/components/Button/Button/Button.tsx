import React from 'react';
import { Button as NativeButton } from 'react-native-paper';
import styles from './Button.styles';
import { useTheme } from '../../../theme';

interface ButtonProps {
  onPressFunction: () => void;
  text: string;
  mode: 'text' | 'outlined' | 'contained';
}

const Button = ({ onPressFunction, text, mode }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <NativeButton
      style={[styles.button, { backgroundColor: colors.button }]}
      mode={mode}
      onPress={onPressFunction}
    >
      {text}
    </NativeButton>
  );
};

export default Button;
