import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { FileProps } from '../../../assets';
import { ActivityIndicator, Button, ImageSelector, Toast } from '../../../components';
import { I18N } from '../../../locales';
import { useTheme } from '../../../theme';
import { sendPhoto, canSendPhoto } from './MainPage.helper';
import styles from './MainPage.styles';

const MainPage = () => {
  const [file, setFile] = useState<FileProps | null>(null);

  const [showLoading, setShowLoading] = useState<boolean>(false);
  const { colors } = useTheme();

  /**
   * The function send the shelf photo to the API
   * @param photo FileProps
   */
  async function send(photo: FileProps) {
    const isAuthToSendPhoto = await canSendPhoto();
    if (isAuthToSendPhoto.result) {
      setShowLoading(true);
      Toast(I18N.t('mainPage.pleaseWait'), true);
      await sendPhoto(photo, setShowLoading);
    } else {
      Toast(isAuthToSendPhoto.message, true);
      setShowLoading(false);
    }
  }

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.safeAreaView} contentContainerStyle={styles.scrollView}>
        <View style={styles.view}>
          <ImageSelector
            file={file}
            setFile={(selectedFile: FileProps | null) => setFile(selectedFile)}
          />
          {file && (
            <Button
              text={I18N.t('mainPage.sendPhoto')}
              onPressFunction={async () => {
                await send(file);
              }}
              mode={'contained'}
              hasMarginVertical={true}
            />
          )}
        </View>
      </ScrollView>

      {showLoading && <ActivityIndicator color={'red'} />}
    </SafeAreaView>
  );
};
export default MainPage;
