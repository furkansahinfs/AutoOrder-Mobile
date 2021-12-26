import ValidationResult from './validationResult';
import { I18N } from '../locales/language';

/**
 * The function tries to validate email and return result
 * @param email email string
 * @returns validation result : object
 */
function validate(email: string) {
  let errorMessage = '';
  if (!email) {
    errorMessage += I18N.t('signupPage.emptyEmail') + '\n';
  } else if (!validateRegex(email)) {
    errorMessage += I18N.t('signupPage.emailInWrongFormat') + '\n';
  }

  const isVaild = !errorMessage;

  return ValidationResult(errorMessage, isVaild);
}

function validateRegex(email: string) {
  var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(email);
}

export default validate;
