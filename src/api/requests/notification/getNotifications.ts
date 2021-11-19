import api from '../../index';
import rerequest from '../rerequest';

const getNotifications = async (page: number, pageSize: number) => {
  const path = '/notifications/me';

  const searchParams = new URLSearchParams();

  searchParams.append('direction', 'DESC');
  searchParams.append('field', 'id');
  searchParams.append('page', page.toString());
  searchParams.append('page_size', pageSize.toString());

  return await api.GET(path, {params: searchParams}).then(async (result: any) => {
    if (result.status === 401) {
      result = await rerequest(result.config);
    }
    if (result?.data?.notifications !== undefined) {
      return result.data;
    } else {
      return null;
    }
  });
};

export default getNotifications;
