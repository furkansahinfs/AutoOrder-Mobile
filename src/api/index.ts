export {
  ForgetPasswordRequest,
  LoginRequest,
  LogoutRequest,
  NewActivationRequest,
  ProfileInfo,
  ProfilePicture,
  RefreshToken,
  SignupRequest,
} from './requests';

import { ApiHelper } from './serverConnections/';
import { API_URL } from '@env';

const api = new ApiHelper({
  baseURL: API_URL,
  timeout: 3000,
});

export default api;
