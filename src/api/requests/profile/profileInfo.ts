import api from '../../index';

const profileInfo = async () => {
  const path = '/users/me';

  return await api.GET(path, {}).then((result: any) => {
    if (result.data) {
      return result.data;
    }
    return null;
  });
};

export default profileInfo;
