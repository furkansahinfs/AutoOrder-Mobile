import { IResponse } from '../../../assets/interfaces';
import { Toast } from '../../../components';
import api from '../../index';

const getNotificationWithId = async (id: string) => {
  const path = '/notifications/me/' + id;

  return await api.GET(path, {}).then((result: IResponse) => {
    if (result.status === 200) {
      return result.data?.data;
    } else if (result.error) {
      Toast(result.error, true);
    }
    return null;
  });
};

export default getNotificationWithId;
