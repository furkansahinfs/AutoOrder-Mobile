import api from '../../index';

const getItems = async (shelfType: string) => {
  const path = '/items/' + shelfType;

  return await api.GET(path, {}).then((result: any) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default getItems;
