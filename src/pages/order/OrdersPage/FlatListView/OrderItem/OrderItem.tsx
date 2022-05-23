import React, { memo } from 'react';
import { Image, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OrderItemProp } from '../../../../../assets';
import { I18N } from '../../../../../locales';
import { navigate } from '../../../../../navigation';
import { stylesGlobal } from '../../../../../styles';
import { useTheme } from '../../../../../theme';
import { calculateTotalPrice } from './OrderItem.helper';
import styles from './OrderItem.styles';

interface IOrderItem {
  props: OrderItemProp;
}
const OrderItem = ({ props }: IOrderItem) => {
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  const imgUrl =
    'http://ec2-18-222-13-198.us-east-2.compute.amazonaws.com:8080/api/v1/images/' +
    props.image_path;

  return (
    <TouchableOpacity
      onPress={() => navigate('OrderDetail', { orderDetail: props })}
      style={styles.touchableItem}
    >
      <Card containerStyle={[globalStyles.card, styles.cardOverride]}>
        <View style={[globalStyles.column]}>
          <View style={globalStyles.column}>
            <View style={globalStyles.row}>
              <Image
                source={{
                  uri: imgUrl,
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.cardItem}>
              <Text numberOfLines={3} style={[styles.titleLabel, { color: colors.text }]}>
                {I18N.t('orderItem.order') + ' ' + props?.id}
              </Text>
            </View>
          </View>

          <View style={[styles.cardBottomDetail, { backgroundColor: colors.backdrop }]}>
            <Text numberOfLines={1} style={[styles.detailLabel, { color: colors.background }]}>
              {calculateTotalPrice(props.orders) + ' TL'}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default memo(OrderItem);
