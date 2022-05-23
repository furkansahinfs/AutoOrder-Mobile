import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './OrdersPage.styles';
import { FlatListView } from './FlatListView';
import { getOrders } from './OrdersPage.helper';
import { OrderItemProp } from '../../../assets';

const OrdersPage = () => {
  const [orders, setOrders] = useState<Array<OrderItemProp>>([]);
  const [totalElementSize, setTotalElementSize] = useState<number>(1);
  const pageSize = 10;
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await fetchOrders();
    })();
  }, []);

  async function fetchOrders(isRefresh?: boolean) {
    setShowLoading(true);
    const result: any = await getOrders();

    if (result instanceof Array) {
      const content = result;
      setOrders(isRefresh ? content : orders.concat(content));
      setTotalElementSize(result?.total_elements ? result.total_elements : pageNumber * pageSize);
    }

    setShowLoading(false);
  }

  async function onRefresh() {
    setOrders([]);
    setPageNumber(0);
    await fetchOrders(true);
  }

  async function onReachedEnd() {
    if (totalElementSize > pageNumber * pageSize) {
      setPageNumber(pageNumber + 1);
      await fetchOrders();
    }
  }

  return (
    <View style={styles.view}>
      <FlatListView
        onReachedEnd={onReachedEnd}
        onRefresh={onRefresh}
        orders={orders}
        showLoading={showLoading}
      />
    </View>
  );
};
export default OrdersPage;
