import { Button as RapiButton } from 'react-native-rapi-ui';

type Props = {
  buttonText: string;
  onPress: () => void;
  size: 'sm' | 'md' | 'lg';
};

export const Button = ({ buttonText, size = 'md', ...rest }: Props) => {
  return <RapiButton size={size} text={buttonText} {...rest} />;
};
