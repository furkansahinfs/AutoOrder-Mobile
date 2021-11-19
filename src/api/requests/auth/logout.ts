import api from '../../index';
import rerequest from '../rerequest';
import store from '../../../store';

const logout = async () => {
  const path = '/auth/logout';
  const device_id = store.getState().userCredentials.deviceid;
  const searchParams = new URLSearchParams();
  searchParams.append('device_id', device_id);

  return await api.GET(path, {params: searchParams}).then(async (result: any) => {
    if (result.status === 401) {
      result = await rerequest(result.config);
    }
    if (result?.data?.error?.message) {
      return result.data.error.message;
    } else if (result?.data?.message) {
      return 'Successfull';
    } else {
      return 'error';
    }
  });
};

export default logout;
