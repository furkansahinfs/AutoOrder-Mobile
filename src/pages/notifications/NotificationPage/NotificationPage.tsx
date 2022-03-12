import React, { useEffect } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../../theme';
import { stylesGlobal } from '../../../styles';
import { NotificationEntity } from '../../../assets/interfaces';
import { I18N } from '../../../locales';
import { DefaultIcon } from '../../../components';
import styles from './NotificationPage.styles';
import { init, LabelView, navigateTo } from './NotificationPage.helper';

export default function NotificationPage({ route }) {
  const notification: NotificationEntity = route.params.notification;
  const navigation = useNavigation();
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  useEffect(() => {
    (async () => {
      await init(notification);
    })();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: notification.read ? 'orange' : 'green',
        flex: 1,
      }}
    >
      <View style={[styles.view, { backgroundColor: notification.read ? 'orange' : 'green' }]}>
        <View style={styles.closeIcon}>
          <DefaultIcon
            color={'white'}
            name={'angle-left'}
            onPressFunction={() => {
              navigateTo(navigation);
            }}
          />
        </View>

        <Text style={styles.headerText}>{notification.heading}</Text>
        <View style={[styles.tabStyles, { backgroundColor: colors.background }]}>
          <View style={globalStyles.flexible}>
            <ScrollView contentContainerStyle={styles.cardView}>
              <LabelView
                labelHead={I18N.t('date')}
                labelInfo={notification.sent_at?.slice(0, 19).replace('T', ' ')}
              />
              <LabelView labelHead={'Park'} labelInfo={notification.parking_name} />
              <LabelView labelHead={I18N.t('section')} labelInfo={notification.section_name} />
              <LabelView labelHead={I18N.t('content')} labelInfo={notification.content} />
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
