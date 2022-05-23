import { GetOrdersRequest } from '../../../api';

export async function getOrders() {
  const result = await GetOrdersRequest();
  return result;
}
