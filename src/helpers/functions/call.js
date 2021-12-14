import { Linking } from 'react-native';

/**
 * The function provides to call given phone if exists
 * @param phone
 */
function call(phone) {
  if (phone) {
    Linking.openURL(`tel:${phone}`);
  }
}

export default call;
