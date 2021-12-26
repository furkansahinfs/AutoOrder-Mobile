import { ProfileData } from '../../../assets';
import api from '../../index';

const updateProfileInfo = async (info: ProfileData) => {
  const path = '/userinformation/store';

  const json = {
    full_name: info.full_name,
    phone: info.phone,
    address: info.address,
  };
  return await api.POST(path, json, {}).then((result: any) => {
    if (result.status === 200) {
      return true;
    } else {
      return result.error;
    }
  });
};

export default updateProfileInfo;