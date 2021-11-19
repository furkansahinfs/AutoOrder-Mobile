import api from '../index';
import {TokenRefresher} from '../../helpers/';

const refresh = async (config: object) => {
  await TokenRefresher();
  return api.api
    .request(config)
    .then((response: any) => response.data)
    .catch((error: any) => error.response);
};
export default refresh;
