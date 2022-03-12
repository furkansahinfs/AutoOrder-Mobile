import { IResponse } from '../../../assets/interfaces';
import { Toast } from '../../../components';
import api from '../../index';

const readNotification = async (notificationId: string) => {
  const path = '/notifications/me/' + notificationId;

  return await api.PATCH(path, null, {}).then((result: IResponse) => {
    if (result.status === 200) {
      return result.data?.data?.content;
    } else if (result.error) {
      Toast(result.error, true);
    }
    return null;
  });
};

export default readNotification;
