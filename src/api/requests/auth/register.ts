import { SignupProps } from '../../../assets';
import api from '../../index';

const register = async ({ email, password, }: SignupProps) => {
  const path = '/auth/register';
  const json = {
    email: email,
    password: password,
  };
  return await api.POST(path, json, {}).then((result: any) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.data.error;
    }
  });
};

export default register;
