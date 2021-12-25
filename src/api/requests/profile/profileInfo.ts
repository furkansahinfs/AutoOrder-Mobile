import api from '../../index';

const profileInfo = async () => {
  const path = '/userinformation';

  return await api.GET(path, {}).then((result: any) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return null;
    }
  });
};

export default profileInfo;
