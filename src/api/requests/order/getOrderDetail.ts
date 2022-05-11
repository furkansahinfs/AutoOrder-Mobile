import { IResponse } from '../../../assets';
import api from '../../index';

const getOrderDetail = async (orderId: number) => {
  const path = '/orders/' + orderId;

  return await api.GET(path, {}).then((result: IResponse) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default getOrderDetail;
