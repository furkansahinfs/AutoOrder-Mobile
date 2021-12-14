import api from '../../index';
import { API_CLIENT_ID } from '@env';

const forgetPassword = async (email: string) => {
  const path = '/auth/forgot-password';
  const json = {
    client_id: API_CLIENT_ID,
    email: email,
  };
  return await api.POST(path, json, {}).then((result: any) => {
    if (result.status === 200) {
      return result.data.message;
    } else {
      return result.data.error;
    }
  });
};

export default forgetPassword;
