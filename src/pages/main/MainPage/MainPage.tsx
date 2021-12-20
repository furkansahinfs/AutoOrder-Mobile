import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, ImageSelector } from '../../../components';
import { I18N } from '../../../locales';
import { useTheme } from '../../../theme';
import styles from './MainPage.styles';

const MainPage = () => {
  const [fileUri, setFileUri] = useState<string | null>(null);
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.safeAreaView} contentContainerStyle={styles.scrollView}>
        <View style={styles.view}>
          <ImageSelector fileUri={fileUri} setFileUri={(uri: string | null) => setFileUri(uri)} />
          {fileUri && (
            <Button
              text={I18N.t('mainPage.sendPhoto')}
              onPressFunction={() => console.log(fileUri)}
              mode={'contained'}
              hasMarginVertical={true}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MainPage;
