import api from '../../index';
import {API_CLIENT_ID} from '@env';
import store from '../../../store';
import {updateDeviceId} from '../../../helpers';

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
    refresh_token: '',
    username: email,
  };
  const data = new URLSearchParams(json).toString();

  return await api
    .POST(path, data, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
    .then(result => {
      if (result?.data?.error) {
        return result.data.error.message;
      }
      if (result?.data?.message) {
        return result.data.message;
      }
      return result;
    });
};

export default login;
