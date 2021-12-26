import {
  GetProfileInfoRequest,
  GetShelfConfigurationRequest,
  SendImageRequest,
} from '../../../api';
import { FileProps } from '../../../assets';
import { I18N } from '../../../locales';

/**
 * The function send the shelf photo to the API
 * @param photo FileProps
 */
export async function sendPhoto(photo: FileProps) {
  const response: any = await SendImageRequest(photo);
  //TODO
  if (response) {
    //navigate
  }
}

/**
 * The function controls that user has a configuration and set an address
 * @returns boolean : canSendPhoto
 */
export async function canSendPhoto() {
  const responseShelf: any = await GetShelfConfigurationRequest();
  const responseProfileInfo: any = await GetProfileInfoRequest();
  let errorMessage = '';
  //TODO
  if (!responseProfileInfo?.abc) {
    errorMessage += I18N.t('mainPage.addressNotFound') + '\n\n';
  }
  if (!responseShelf?.address) {
    errorMessage += I18N.t('mainPage.configurationNotFound') + '\n\n';
  }

  return { result: errorMessage !== '', message: errorMessage };
}
