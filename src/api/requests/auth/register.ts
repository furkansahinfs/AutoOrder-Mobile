import { IResponse, SignupProps } from '../../../assets';
import api from '../../index';

const register = async ({ email, password }: SignupProps) => {
  const path = '/signup';
  const json = {
    email: email,
    password: password,
  };
  return await api.POST(path, json, {}).then((result: IResponse) => {
    if (result.success) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default register;
