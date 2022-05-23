import { IResponse } from '../../../assets';
import api from '../../index';

const getOrders = async () => {
  const path = '/orderhistory';

  return await api.GET(path, {}).then((result: IResponse) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default getOrders;
