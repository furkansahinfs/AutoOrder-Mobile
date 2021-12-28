import { GetItemsRequest } from '../../../api';
import { Images, ItemProps } from '../../../assets';
import { Card } from 'react-native-elements';
import { Image, Text, View } from 'react-native';
import { I18N } from '../../../locales';
import React from 'react';
import { stylesGlobal } from '../../../styles';
import { useTheme } from '../../../theme';

import styles from './OrderDetailPage.styles';

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
  let item = gottenData.find((el) => el.name === name);
  return item;
}

export function getItemNameWoutSpace(itemName: string) {
  return itemName
    .split(' ')
    .filter((s) => s)
    .join('');
}

interface ItemObjectProps {
  itemName: string;
  data: Array<ItemProps>;
}
export const ItemObject = ({ itemName, data }: ItemObjectProps) => {
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  const item: ItemProps | undefined = getItemByName(itemName, data);
  return item !== undefined ? (
    <Card containerStyle={[globalStyles.card, styles.cardOverride]}>
      <View style={globalStyles.row}>
        <Image source={Images.items[getItemNameWoutSpace(item.name)]} style={styles.image} />
        <View style={styles.cardItem}>
          <Text style={globalStyles.labelBigger}>{item.name}</Text>
          <Text style={globalStyles.labelSmaller}>
            {I18N.t('orderDetailPage.size') + ' : ' + item.size}
          </Text>
          <Text style={globalStyles.labelSmaller}>
            {I18N.t('orderDetailPage.type') + ' : ' + item.type.toUpperCase()}
          </Text>
        </View>
      </View>
    </Card>
  ) : null;
};
