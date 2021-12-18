import React, { Fragment } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { SafeAreaView, View, StatusBar, Image } from 'react-native';
import styles from './ImageSelector.style';
import { requestCameraPermission } from './ImageSelector.helper';
import { Button } from '../../Button';
import { useTheme } from '../../../theme';

interface ImageSelectorProps {
  fileUri: string | null;
  setFileUri: (uri: string | null) => void;
}

const ImageSelector = ({ fileUri, setFileUri }: ImageSelectorProps) => {
  const { colors } = useTheme();

  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
      mediaType: 'photo',
    },
  };

  const launchCamera = async () => {
    const isGranted = await requestCameraPermission();
    if (isGranted) {
      const response = await ImagePicker.launchCamera(options);
      console.log('launchCamera', response);
      if (response.assets !== undefined && response.assets?.length > 0) {
        setFileUri(response.assets[0].uri ? response.assets[0].uri : null);
      }
    }
  };

  const launchImageLibrary = async () => {
    const response = await ImagePicker.launchImageLibrary(options);
    console.log('launchLibrary', response);
    if (response.assets !== undefined && response.assets?.length > 0) {
      setFileUri(response.assets[0].uri ? response.assets[0].uri : null);
    }
  };

  const renderFileUri = () => {
    return (
      <View style={styles.ImageSections}>
        <Image source={{ uri: fileUri }} style={styles.images} />
        <Button
          mode="contained"
          onPressFunction={() => setFileUri(null)}
          text={'Delete'}
          widthFit={true}
          hasMarginTop={true}
        />
      </View>
    );
  };

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={[styles.body, { backgroundColor: colors.card }]}>
          {fileUri !== null && renderFileUri()}
          <View style={styles.btnParentSection}>
            <Button
              mode="contained"
              onPressFunction={async () => await launchCamera()}
              text={'Camera'}
              widthFit={true}
              hasMarginTop={true}
            />

            <Button
              mode="contained"
              onPressFunction={async () => await launchImageLibrary()}
              text={'Gallery'}
              widthFit={true}
              hasMarginTop={true}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default ImageSelector;
