import api from '../../index';

const getShelfConfiguration = async () => {
  const path = '/users/me';

  return await api.GET(path, {}).then((result: any) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default getShelfConfiguration;
