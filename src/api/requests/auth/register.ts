import api from '../../index';

interface SignupProps {
  email: string;
  name: string | null;
  password: string;
  phone: string | null;
  surname: string | null;
}

const register = async ({ email, name, password, phone, surname }: SignupProps) => {
  const path = '/auth/register';
  const json = {
    email: email,
    name: name,
    password: password,
    phone: phone === '' ? null : phone,
    surname: surname,
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
