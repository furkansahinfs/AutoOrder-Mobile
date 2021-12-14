import React from 'react';
import { SafeAreaView, View } from 'react-native';

import styles from './MainPage.styles';

export default function MainPage() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view} />
    </SafeAreaView>
  );
}
