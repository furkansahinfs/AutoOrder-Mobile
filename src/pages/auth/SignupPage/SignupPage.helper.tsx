import {MailValidator, PasswordValidator} from '../../../validator';
import {Toast} from '../../../components';
import {I18N} from '../../../locales/language';
import {SignupRequest} from '../../../api';

/**
 * The function controls that given email and password are valid
 * If not valid, display a Toast
 * @param email
 * @param password
 * @param confirmPassword
 * @returns validation result : boolean
 */
export function validateSignupInputs(email: string, password: string, confirmPassword: string) {
  let errorMessage = '';
  const mailValidationResult = MailValidator(email);
  const passwordValidationResult = PasswordValidator(password, confirmPassword);

  const isValidated = mailValidationResult.result && passwordValidationResult.result;

  if (!isValidated) {
    errorMessage += mailValidationResult.errorMessage + passwordValidationResult.errorMessage;
    errorMessage = errorMessage.replace(/\n$/, '');
    Toast(errorMessage, true);
    return false;
  }

  return true;
}

/**
 * The function controls that given name, surname and phone are valid
 * If not valid, display a Toast
 * @param name
 * @param surname
 * @param phone
 * @returns validation result : boolean
 */
export function validateInfoInputs(name: string, surname: string) {
  let errorMessage = '';

  if (!name) {
    errorMessage += I18N.t('emptyName') + '\n';
  }

  if (!surname) {
    errorMessage += I18N.t('emptySurname') + '\n';
  }

  const isValidated = !errorMessage;
  if (!isValidated) {
    errorMessage = errorMessage.replace(/\n$/, '');
    Toast(errorMessage, true);
    return false;
  }

  return true;
}

interface SignupProps {
  email: string;
  name: string | null;
  password: string;
  phone: string | null;
  surname: string | null;
}

/**
 * The function requests to the API to register user.
 * If register is successful, view a Toast message.
 * Else view a Toast message that includes error message of response
 * @param json : SignupProps
 * @param navigation
 */
export async function register(json: SignupProps, navigation: any) {
  const response: any = await SignupRequest(json);
  if (!response?.id) {
    Toast(response, true);
  } else {
    Toast(I18N.t('signupSuccessfull'), true);
    navigation.navigate('Login');
  }
}
