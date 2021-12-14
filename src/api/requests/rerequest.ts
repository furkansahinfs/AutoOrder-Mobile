import api from '../index';
import { tokenRefresher } from '../../helpers/';

const refresh = async (config: object) => {
  const isAuth = await tokenRefresher();
  if (isAuth) {
    return api.api
      .request(config)
      .then((response: any) => response.data)
      .catch((error: any) => error.response);
  } else {
    return {
      data: { error: 'Unauthorized' },
      success: false,
      status: 401,
    };
  }
};
export default refresh;
