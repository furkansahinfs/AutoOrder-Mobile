export {
  ForgetPasswordRequest,
  LoginRequest,
  LogoutRequest,
  NewActivationRequest,
  ProfileInfoRequest,
  ProfilePictureRequest,
  RefreshToken,
  SendImageRequest,
  SetProfileInfoRequest,
  SignupRequest,
  UpdateProfileInfoRequest,
} from './requests';

import { ApiHelper } from './serverConnections/';
import { API_URL } from '@env';

console.log(API_URL);
const api = new ApiHelper({
  baseURL: 'http://ec2-3-123-36-114.eu-central-1.compute.amazonaws.com:8080/api/v1',
  timeout: 50000,
});

export default api;
