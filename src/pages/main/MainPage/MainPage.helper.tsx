import {
  GetProfileInfoRequest,
  GetShelfConfigurationRequest,
  SendImageRequest,
} from '../../../api';
import { FileProps } from '../../../assets';
import { I18N } from '../../../locales';

//TODO
/**
 * The function send the shelf photo to the API
 * @param photo FileProps
 */
export async function sendPhoto(photo: FileProps, setShowLoading: (val: boolean) => void) {
  /*const response: any = await SendImageRequest(photo);

  if (response) {
    //navigate
  }*/
  setShowLoading(true);
}

/**
 * The function controls that user has a configuration and set an address
 * @returns boolean : canSendPhoto
 */
export async function canSendPhoto() {
  const responseShelfFront: any = await GetShelfConfigurationRequest('front');
  const responseShelfBack: any = await GetShelfConfigurationRequest('back');
  const responseProfileInfo: any = await GetProfileInfoRequest();
  let errorMessage = '';

  if (!responseProfileInfo?.address) {
    errorMessage += I18N.t('mainPage.addressNotFound') + '\n\n';
  }
  if (
    !(responseShelfFront instanceof Array && responseShelfFront.length > 0) &&
    responseShelfBack instanceof Array &&
    responseShelfBack.length > 0
  ) {
    errorMessage += I18N.t('mainPage.configurationNotFound') + '\n\n';
  }

  return { result: errorMessage === '', message: errorMessage };
}
