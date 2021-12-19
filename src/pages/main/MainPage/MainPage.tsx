import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { ImageSelector } from '../../../components';
import styles from './MainPage.styles';

const MainPage = () => {
  const [fileUri, setFileUri] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>
        <ImageSelector fileUri={fileUri} setFileUri={(uri: string | null) => setFileUri(uri)} />
      </View>
    </SafeAreaView>
  );
};
export default MainPage;
