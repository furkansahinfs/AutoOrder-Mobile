import { IResponse } from '../../../assets/interfaces';
import { Toast } from '../../../components';
import api from '../../index';

const getNotifications = async (page: number, pageSize: number) => {
  const path = '/notifications/me';

  const searchParams = new URLSearchParams();

  searchParams.append('direction', 'DESC');
  searchParams.append('field', 'id');
  searchParams.append('page', page.toString());
  searchParams.append('page_size', pageSize.toString());

  return await api.GET(path, { params: searchParams }).then((result: IResponse) => {
    if (result.status === 200) {
      return result.data?.data;
    } else if (result.error) {
      Toast(result.error, true);
    }
    return null;
  });
};

export default getNotifications;
