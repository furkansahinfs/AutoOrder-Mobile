import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Images, ItemProps } from '../../../assets';
import { Header } from '../../../components';
import { I18N } from '../../../locales';
import { stylesGlobal } from '../../../styles';
import { useTheme } from '../../../theme';
import { getShelfItems, ItemObject } from './OrderDetailPage.helper';
import styles from './OrderDetailPage.styles';

const OrderDetailPage = ({ route }) => {
  const order = route.params.order;
  const [orderItems, setOrderItems] = useState<Array<ItemProps>>([]);
  const [allItems, setAllItems] = useState<Array<ItemProps>>([]);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  useEffect(() => {
    (async () => {
      await init();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = async () => {
    setOrderItems(order);
    const allItemsGotten = await getShelfItems();
    console.log(route.params);
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
        {showLoading && <ActivityIndicator />}
        <FlatList
          data={orderItems ? orderItems : []}
          style={[styles.flatlist, { backgroundColor: colors.background2 }]}
          contentContainerStyle={[styles.flatlist, { backgroundColor: colors.background2 }]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }: { item: string }) => (
            <ItemObject data={allItems} itemName={item} />
          )}
          ListEmptyComponent={emptyView}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderDetailPage;
