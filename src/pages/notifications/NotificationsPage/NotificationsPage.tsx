import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../../../assets';
import { ActivityIndicator, Button, Header } from '../../../components';
import { I18N } from '../../../locales';
import { useTheme } from '../../../theme';
import styles from './NotificationsPage.styles';
import { Label } from './NotificationsPage.helper';
import { stylesGlobal } from '../../../styles';
import { GetNotifications } from '../../../api';
import { NotificationEntity } from '../../../assets/interfaces';

//TODO Refactoring
//TODO Refactoring
//TODO Refactoring

export default function NotificationsPage() {
  const [notificationEntitites, setNotificationEntitites] = useState<Array<NotificationEntity>>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const navigation = useNavigation();
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  useEffect(() => {
    (async () => {
      await init();
    })();
  }, []);

  /**
   * The function gets the reservations from api and updates the reservation list
   */
  async function init() {
    const response = await GetNotifications(page, 5);
    if (response !== null) {
      const gottenNotifications: Array<NotificationEntity> = response?.notifications;
      setNotificationEntitites(gottenNotifications);
      setTotalPage(response?.total_page);
    }
    setShowLoading(false);
  }

  async function getNewPage() {
    setShowLoading(true);
    if (page < totalPage) {
      const newResponse = await GetNotifications(page + 1, 5);
      setPage(page + 1);
      const gottenNewNotifications: Array<NotificationEntity> = newResponse?.notifications;
      setNotificationEntitites(notificationEntitites.concat(gottenNewNotifications));
    }
  }

  const renderFooter = () => {
    if (page >= totalPage - 1) {
      return null;
    }
    return (
      //Footer View with Load More button
      <View>
        <Button
          text={I18N.t('continue')}
          mode="contained"
          onPressFunction={async () => {
            await getNewPage();
            setShowLoading(false);
          }}
        />
      </View>
    );
  };

  const emptyView = (
    <View style={styles.nodata}>
      {!showLoading && (
        <View>
          <Image source={Images.nodata} style={styles.image} />
          <Text style={[globalStyles.centerText, { color: colors.text }]}>{I18N.t('empty')}</Text>
        </View>
      )}
    </View>
  );

  /**
   * The function updates the read vlaue of clicked notification
   * and re-render the list
   * @param notification NotificationEntity which is clicked in flatlist
   */
  function rerender(notification: NotificationEntity) {
    const updatedNotifications = notificationEntitites.map((item: NotificationEntity) => {
      if (item.id === notification.id) {
        return Object.assign({}, item, { read: true });
      }
      return item;
    });
    setNotificationEntitites(updatedNotifications);
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={[styles.view, { backgroundColor: colors.background }]}>
        <Header title={I18N.t('notificationPage.notificationsHeader')} />
        <FlatList
          data={notificationEntitites}
          style={{ backgroundColor: colors.background }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }: { item: NotificationEntity }) => (
            <Label colors={colors} item={item} navigation={navigation} rerender={rerender} />
          )}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={emptyView}
        />
        {showLoading && <ActivityIndicator />}
      </View>
    </SafeAreaView>
  );
}
