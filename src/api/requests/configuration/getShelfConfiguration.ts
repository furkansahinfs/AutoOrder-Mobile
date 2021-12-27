import api from '../../index';

const getShelfConfiguration = async (shelfType: string) => {
  const path = '/configuration/' + shelfType;

  return await api.GET(path, {}).then((result: any) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default getShelfConfiguration;
