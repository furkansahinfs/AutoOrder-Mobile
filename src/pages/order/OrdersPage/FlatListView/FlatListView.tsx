import React from 'react';
import styles from './FlatListView.styles';
import { Images, OrderItemProp } from '../../../../assets';
import { FlatList, Image, RefreshControl, Text, View } from 'react-native';
import { I18N } from '../../../../locales';
import { useTheme } from '../../../../theme';
import { stylesGlobal } from '../../../../styles';
import OrderItem from './OrderItem';

interface IFlatListView {
  onReachedEnd: () => void;
  onRefresh: () => void;
  orders: Array<OrderItemProp>;
  showLoading: boolean;
}
const FlatListView = ({ onReachedEnd, onRefresh, orders, showLoading }: IFlatListView) => {
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  const emptyView = (
    <View style={styles.nodata}>
      {!showLoading && (
        <View>
          <Image source={Images.nodata} style={styles.image} />
          <Text style={[globalStyles.centerText, { color: colors.text }]}>
            {I18N.t('ordersPage.noData')}
          </Text>
        </View>
      )}
    </View>
  );

  return (
    <FlatList
      data={orders}
      contentContainerStyle={styles.flatListView}
      style={{ backgroundColor: colors.background }}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={emptyView}
      renderItem={({ item }: { item: any }) => {
        return <OrderItem props={item} />;
      }}
      onEndReached={onReachedEnd}
      onEndReachedThreshold={0.8}
      refreshControl={<RefreshControl refreshing={showLoading} onRefresh={onRefresh} />}
      initialNumToRender={7}
      removeClippedSubviews={true}
    />
  );
};
export default FlatListView;
