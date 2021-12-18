import api from '../../index';

interface SignupProps {
  email: string;
  name: string;
  password: string;
  surname: string;
}

const register = async ({ email, name, password, surname }: SignupProps) => {
  const path = '/auth/register';
  const json = {
    email: email,
    fullName: name + ' ' + surname,
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
