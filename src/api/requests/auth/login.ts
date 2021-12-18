import api from '../../index';

const login = async (email: string, password: string) => {
  const path = '/auth/login';
  const json = {
    password: password,
    username: email,
  };

  return await api.POST(path, json, {}).then((result: any) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.data.error;
    }
  });
};

export default login;
