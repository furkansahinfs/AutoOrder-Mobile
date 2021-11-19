export {
  ForgetPasswordRequest,
  GetNotificationCount,
  GetNotifications,
  GetNotificationWithId,
  LoginRequest,
  LogoutRequest,
  NewActivationRequest,
  ProfileInfo,
  ProfilePicture,
  ReadNotification,
  RefreshToken,
  SignupRequest,
} from './requests';

import {ApiHelper} from './serverConnections/';
import {API_URL} from '@env';

const api = new ApiHelper({
  baseURL: API_URL,
  timeout: 3000,
});

export default api;
