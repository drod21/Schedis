import { View, TouchableOpacity, Text } from 'react-native';

import styles from './Button.styles';

type Props = {
  buttonText: string;
  onPress: () => void;
};

export const Button = ({ buttonText, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};
