import { GetItemsRequest } from '../../../api';
import { Images, ItemProps, OrderItemDetailProp } from '../../../assets';
import { Card } from 'react-native-elements';
import { Image, Text, View } from 'react-native';
import { I18N } from '../../../locales';
import React from 'react';
import { stylesGlobal } from '../../../styles';
import { useTheme } from '../../../theme';

import styles from './OrderDetailPage.styles';

/*
export const getOrderDetail = async (orderId: number) => {
  return await GetOrderDetailRequest(orderId);
};
*/

export const calculateTotalPrice = (orderItems: Array<OrderItemDetailProp>) => {
  let total = 0;
  orderItems.forEach((element) => {
    total = total + element.price;
  });
  return total.toFixed(2);
};

export const getShelfItems = async () => {
  const responseItemsFront: any = await GetItemsRequest('front');
  const responseItemsBack: any = await GetItemsRequest('back');
  let arr: Array<ItemProps> = [];
  if (responseItemsFront instanceof Array) {
    arr = arr.concat(responseItemsFront);
  }
  if (responseItemsBack instanceof Array) {
    arr = arr.concat(responseItemsBack);
  }
  return arr;
};

function getItemByName(name: string, gottenData: Array<ItemProps>) {
  let item = gottenData.find((el) => {
    return name.includes(el.name);
  });
  return item;
}

export function getItemNameWoutSpace(itemName: string) {
  return itemName
    .split(' ')
    .filter((s) => s)
    .join('');
}

interface ItemObjectProps {
  item: OrderItemDetailProp;
  data: Array<ItemProps>;
}
export const ItemObject = ({ item, data }: ItemObjectProps) => {
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);
  const foundItem: ItemProps | undefined = getItemByName(item.productName, data);
  return foundItem !== undefined ? (
    <Card containerStyle={[globalStyles.card, styles.cardOverride]}>
      <View style={globalStyles.row}>
        <Image source={Images.items[getItemNameWoutSpace(foundItem.name)]} style={styles.image} />
        <View style={styles.cardItem}>
          <Text style={globalStyles.labelBigger}>{item.productName}</Text>
          <Text style={globalStyles.labelBigger}>{item.brandName}</Text>
          <Text style={globalStyles.labelSmaller}>
            {I18N.t('orderDetailPage.size') + ' : ' + foundItem.size}
          </Text>
          <Text style={globalStyles.labelSmaller}>
            {I18N.t('orderDetailPage.type') +
              ' : ' +
              I18N.t('type.' + foundItem.type.toLowerCase())}
          </Text>
        </View>
      </View>
      <View style={[styles.cardBottomDetail, { backgroundColor: colors.backdrop }]}>
        <Text numberOfLines={1} style={[{ color: colors.background }]}>
          {item.price + ' TL'}
        </Text>
      </View>
    </Card>
  ) : null;
};
