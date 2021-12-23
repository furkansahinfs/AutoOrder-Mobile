export {
  ForgetPasswordRequest,
  LoginRequest,
  LogoutRequest,
  NewActivationRequest,
  ProfileInfoRequest,
  ProfilePictureRequest,
  RefreshToken,
  SendImageRequest,
  SignupRequest,
  UpdateProfileInfoRequest,
} from './requests';

import { ApiHelper } from './serverConnections/';
import { API_URL } from '@env';

const api = new ApiHelper({
  baseURL: API_URL,
  timeout: 3000,
});

export default api;
