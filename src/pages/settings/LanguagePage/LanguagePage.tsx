import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {adjust} from './LanguagePage.helper';
import styles from './LanguagePage.styles';

export default function LanguagePage({route}) {
  const page = route.params.page;
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={async () => await adjust('tr-TR', navigation, page)}>
        <View>
          <Image source={Images.tr} style={styles.logo} />
          <Text style={styles.headText}>Türkçe</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={async () => await adjust('en-US', navigation, page)}>
        <Image source={Images.en} style={styles.logo} />
        <Text style={styles.headText}>English</Text>
      </TouchableOpacity>
    </View>
  );
}
