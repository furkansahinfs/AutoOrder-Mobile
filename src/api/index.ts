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
  baseURL: 'http://ec2-18-222-13-198.us-east-2.compute.amazonaws.com:8080/api/v1',
  timeout: 50000,
});

export default api;
