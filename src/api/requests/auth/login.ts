import api from '../../index';
import { API_CLIENT_ID } from '@env';
import store from '../../../store';
import { updateDeviceId } from '../../../helpers';

async function getDeviceId() {
  let device_id = store.getState().userCredentials.deviceid;
  if (device_id === '' || device_id === undefined) {
    device_id = await updateDeviceId();
  }
  return device_id;
}

const login = async (email: string, password: string) => {
  const path = '/auth/login';
  const deviceid = await getDeviceId();
  const json = {
    client_id: API_CLIENT_ID,
    client_secret: deviceid,
    grant_type: 'password',
    password: password,
    username: email,
  };

  return await api.POST(path, json, {}).then((result: any) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.data.error;
    }
  });
};

export default login;
