import { ProfileData } from '../../../assets';
import api from '../../index';

const updateProfileInfo = async (info: ProfileData) => {
  const path = '/users/me';

  const json = {
    email: info.email,
    fullName: info.name + ' ' + info.surname,
    phone: info.phone,
  };
  return await api.POST(path, json, {}).then((result: any) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.data.error;
    }
  });
};

export default updateProfileInfo;
