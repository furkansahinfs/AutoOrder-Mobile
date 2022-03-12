import { IResponse } from '../../../assets/interfaces';
import api from '../../index';

const getNotificationCount = async () => {
  const path = '/notifications/me/unread';

  return await api.GET(path, {}).then((result: IResponse) => {
    if (result.status === 200) {
      return result.data?.data;
    } else {
      return 0;
    }
  });
};

export default getNotificationCount;
