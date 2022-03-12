import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './NotificationsPage.styles';
import { stylesGlobal } from '../../../styles';
import { NotificationEntity } from '../../../assets/interfaces';

interface EntityProps {
  item: NotificationEntity;
  navigation: any;
  colors: any;
  rerender: (item: NotificationEntity) => void;
}

/**
 * Returns the view of notification entity
 * @param param0 : EntityProps
 * @returns View
 */
export const Label = ({ item, navigation, colors, rerender }: EntityProps) => {
  const globalStyles = stylesGlobal(colors);
  return (
    <View style={[globalStyles.entityLabelView, { backgroundColor: colors.card }]}>
      <TouchableOpacity
        style={globalStyles.row}
        onPress={() => {
          navigation.navigate('Notification', { notification: item });
          rerender(item);
        }}
      >
        <View style={styles.labelIcon}>
          <Icon
            name={'bell'}
            color={item.read ? 'orange' : 'green'}
            size={styles.iconSize.height}
          />
        </View>

        <View style={styles.labelTextsBox}>
          <View style={styles.halfBox}>
            <Text style={[globalStyles.labelBigger, { fontWeight: item.read ? 'normal' : 'bold' }]}>
              {item.heading}
            </Text>
            <View style={globalStyles.rect} />
            <Text
              style={[globalStyles.labelSmaller, { fontWeight: item.read ? 'normal' : 'bold' }]}
            >
              {item.sent_at?.slice(0, 19).replace('T', ' ')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
