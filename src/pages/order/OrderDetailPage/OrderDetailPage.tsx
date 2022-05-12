import React, { useEffect, useState } from 'react';
import { FlatList, Image, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import { Images, ItemProps, OrderItemDetailProp } from '../../../assets';
import { Header } from '../../../components';
import { I18N } from '../../../locales';
import { stylesGlobal } from '../../../styles';
import { useTheme } from '../../../theme';
import {
  calculateTotalPrice,
  getOrderDetail,
  getShelfItems,
  ItemObject,
} from './OrderDetailPage.helper';
import styles from './OrderDetailPage.styles';

const OrderDetailPage = ({ route }) => {
  const orderId = route.params.id;
  const [orderItems, setOrderItems] = useState<Array<OrderItemDetailProp>>([]);
  const [allItems, setAllItems] = useState<Array<ItemProps>>([]);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  useEffect(() => {
    (async () => {
      await init();
    })();
  }, []);

  const init = async () => {
    const orderDetailResult = await getOrderDetail(orderId);
    if (orderDetailResult?.data) {
      setOrderItems(orderDetailResult.data);
    }
    const allItemsGotten = await getShelfItems();
    setAllItems(allItemsGotten);
    setShowLoading(false);
  };

  const emptyView = showLoading ? null : (
    <View style={styles.nodataView}>
      <Image source={Images.nodata} style={styles.nodataImage} />
      <Text style={[globalStyles.labelBigger, globalStyles.centerText, { color: colors.text }]}>
        {I18N.t('orderDetailPage.noData')}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background2 }]}>
      <Header back={true} title={I18N.t('orderDetailPage.header')} />
      <View style={styles.view}>
        <FlatList
          data={orderItems}
          style={[styles.flatlist, { backgroundColor: colors.background2 }]}
          contentContainerStyle={[styles.flatlist, { backgroundColor: colors.background2 }]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }: { item: OrderItemDetailProp }) => (
            <ItemObject data={allItems} item={item} />
          )}
          ListEmptyComponent={emptyView}
          refreshControl={<RefreshControl refreshing={showLoading} onRefresh={() => null} />}
        />
        <View style={[styles.totalSizeView, { backgroundColor: colors.backdrop }]}>
          <Text numberOfLines={1} style={[{ color: colors.background }]}>
            {I18N.t('orderDetailPage.totalPrice') + ' : ' + calculateTotalPrice(orderItems) + ' TL'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetailPage;
