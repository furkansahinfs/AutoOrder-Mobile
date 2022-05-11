export {
  ForgetPasswordRequest,
  LoginRequest,
  LogoutRequest,
  GetItemsRequest,
  GetNotificationCount,
  GetNotificationWithId,
  GetNotifications,
  GetOrderDetailRequest,
  GetOrdersRequest,
  GetProfileInfoRequest,
  GetShelfConfigurationRequest,
  NewActivationRequest,
  ProfilePictureRequest,
  ReadNotification,
  RefreshToken,
  SendImageRequest,
  SetProfileInfoRequest,
  SetShelfConfigurationRequest,
  SignupRequest,
  UpdateProfileInfoRequest,
  UpdateShelfConfigurationRequest,
} from './requests';

import { ApiHelper } from './serverConnections/';
import { API_URL } from '@env';

console.log('API_URL : ', API_URL);
const api = new ApiHelper({
  baseURL: API_URL,
  timeout: 50000,
});

export default api;
