import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Header } from '../../../components';
import { I18N } from '../../../locales';
import { navigate } from '../../../navigation';
import { useTheme } from '../../../theme';
import styles from './ConfigurationPage.styles';

const ConfigurationPage = () => {
  const { colors } = useTheme();
  useEffect(() => {
    (async () => {
      //await fetchProfile();
    })();
  }, []);

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background }]}>
      <Header back={true} title={I18N.t('configurationPage.header')} />
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() => navigate('ShelfConfiguration', { shelfType: 'Back' })}
          // eslint-disable-next-line react-native/no-inline-styles
          style={[styles.touchableText, { backgroundColor: 'lightblue' }]}
        >
          <Text style={styles.text}>{I18N.t('configurationPage.backShelf')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('ShelfConfiguration', { shelfType: 'Front' })}
          style={[styles.touchableText]}
        >
          <Text style={styles.text}>{I18N.t('configurationPage.frontShelf')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ConfigurationPage;
