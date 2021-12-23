import api from '../../index';

const newActivation = async (email: string) => {
  const path = '/auth/resend-activation-code';
  const json = {
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

export default newActivation;
