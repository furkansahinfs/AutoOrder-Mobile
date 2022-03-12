import { IResponse } from '../../../assets';
import api from '../../index';

const login = async (email: string, password: string) => {
  const path = '/login';
  const json = {
    password,
    email,
  };

  return await api.POST(path, json, {}).then((result: IResponse) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default login;
