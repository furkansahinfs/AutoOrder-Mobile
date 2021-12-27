import api from '../../index';

const setShelfConfiguration = async (shelfType: string, items: any) => {
  const path = '/configuration/store/' + shelfType;

  return await api.POST(path, items, {}).then((result: any) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default setShelfConfiguration;
