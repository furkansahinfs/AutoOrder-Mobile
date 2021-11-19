import api from '../../index';
import {API_CLIENT_ID} from '@env';

const newActivation = async (email: string) => {
  const path = '/auth/resend-activation-code';
  const json = {
    client_id: API_CLIENT_ID,
    email: email,
  };

  return await api.POST(path, json, {}).then((result: any) => {
    if (result.data?.error?.message) {
      return result.data.error.message;
    }
    return result.data.message;
  });
};

export default newActivation;
