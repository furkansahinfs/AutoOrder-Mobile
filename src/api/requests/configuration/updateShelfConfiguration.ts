import { IResponse } from '../../../assets';
import api from '../../index';

const updateShelfConfiguration = async (shelfType: string, items: any) => {
  const path = '/configuration/update/' + shelfType;

  return await api.POST(path, items, {}).then((result: IResponse) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default updateShelfConfiguration;
