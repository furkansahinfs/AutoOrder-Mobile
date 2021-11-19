import api from '../../index';
import rerequest from '../rerequest';

const getNotificationCount = async () => {
  const path = '/notifications/me/unread';

  return await api.GET(path, {}).then(async (result: any) => {
    if (result.status === 401) {
      result = await rerequest(result.config);
    }
    if (isNaN(result?.data)) {
      return 0;
    } else {
      return result?.data;
    }
  });
};

export default getNotificationCount;
