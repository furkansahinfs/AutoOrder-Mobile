import api from '../../index';
import rerequest from '../rerequest';

const getNotificationWithId = async (id: string) => {
  const path = '/notifications/me/' + id;

  return await api.GET(path, {}).then(async (result: any) => {
    if (result.status === 401) {
      result = await rerequest(result.config);
    }
    if (result?.data?.id !== undefined) {
      return result.data;
    } else {
      return null;
    }
  });
};

export default getNotificationWithId;
