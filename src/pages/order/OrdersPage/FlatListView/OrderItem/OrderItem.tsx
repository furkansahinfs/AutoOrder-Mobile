import React, { memo } from 'react';
import { Image, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Images, OrderItemProp } from '../../../../../assets';
import { formatDate } from '../../../../../helpers';
import { I18N } from '../../../../../locales';
import { navigate } from '../../../../../navigation';
import { stylesGlobal } from '../../../../../styles';
import { useTheme } from '../../../../../theme';
import { findPicture, getItemNameWoutSpace } from './OrderItem.helper';
import styles from './OrderItem.styles';

interface IOrderItem {
  props: OrderItemProp;
}
const OrderItem = ({ props }: IOrderItem) => {
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  const imageName = findPicture(props.details);
  return (
    <TouchableOpacity
      onPress={() => navigate('OrderDetail', { orderId: props?.id })}
      style={styles.touchableItem}
    >
      <Card containerStyle={[globalStyles.card, styles.cardOverride]}>
        <View style={[globalStyles.column]}>
          <View style={globalStyles.column}>
            <View style={globalStyles.row}>
              <Image source={Images.foodOrder} style={styles.image} />
              <Image
                source={Images.items[getItemNameWoutSpace(imageName)]}
                style={styles.itemImage}
              />
            </View>
            <View style={styles.cardItem}>
              <Text numberOfLines={3} style={[styles.titleLabel, { color: colors.text }]}>
                {I18N.t('orderItem.order') + ' ' + props?.id}
              </Text>

              <View style={styles.cardLocationView}>
                <Text style={[styles.locationLabel, { color: colors.text }]}>
                  {'📍 ' + props.address}
                </Text>
                <Text style={[styles.locationLabel, { color: colors.text }]}>
                  {'🕒 ' + formatDate(new Date(props.createdAt))}
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.cardBottomDetail, { backgroundColor: colors.backdrop }]}>
            <Text numberOfLines={1} style={[styles.detailLabel, { color: colors.background }]}>
              {props.price + ' TL'}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default memo(OrderItem);
