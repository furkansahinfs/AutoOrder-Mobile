import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './TextButton.styles';
import { useTheme } from '../../../theme';

interface ButtonProps {
  onPressFunction: () => void;
  text: string;
}

const TextButton = ({ onPressFunction, text }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <Button style={styles.buttonText} mode="text" onPress={onPressFunction}>
      <Text style={{ color: colors.text }}>{text}</Text>
    </Button>
  );
};

export default TextButton;
