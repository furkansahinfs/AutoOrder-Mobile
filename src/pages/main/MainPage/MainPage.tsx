import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, ImageSelector } from '../../../components';
import { I18N } from '../../../locales';
import { useTheme } from '../../../theme';
import { sendPhoto } from './MainPage.helper';
import styles from './MainPage.styles';

const MainPage = () => {
  const [file, setFile] = useState<any>(null);
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.safeAreaView} contentContainerStyle={styles.scrollView}>
        <View style={styles.view}>
          <ImageSelector file={file} setFile={(file: any) => setFile(file)} />
          {file && (
            <Button
              text={I18N.t('mainPage.sendPhoto')}
              onPressFunction={async () => {
                await sendPhoto({ name: file.fileName, type: file.type, uri: file.uri });
              }}
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
