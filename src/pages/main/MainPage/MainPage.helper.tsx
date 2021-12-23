import { SendImageRequest } from '../../../api';

export interface PhotoProps {
  uri: string;
  type: string;
  name: string;
}
/**
 * The function send the shelf photo to the API
 * @param photo PhotoProps
 */
export async function sendPhoto(photo: PhotoProps) {
  await SendImageRequest(photo);
}
