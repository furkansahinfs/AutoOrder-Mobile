import api from '../../index';
import rerequest from '../rerequest';

const readNotification = async (notificationId: string) => {
  const path = '/notifications/me/' + notificationId;

  return await api.PATCH(path, null, {}).then(async (result: any) => {
    if (result.status === 401) {
      result = await rerequest(result.config);
    }
    if (result?.data?.content !== undefined) {
      return result.data.content;
    } else {
      return null;
    }
  });
};

export default readNotification;
