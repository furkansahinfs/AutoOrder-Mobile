import React, { Fragment, useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { ImageLibraryOptions } from 'react-native-image-picker';
import { Image, StatusBar, SafeAreaView, ScrollView, View } from 'react-native';
import styles from './ImageSelector.style';
import { requestCameraPermission } from './ImageSelector.helper';
import { Icon, TextButton } from '../..';
import ModalView from './Subcomponents/ModalView';
import { I18N } from '../../../locales';

interface ImageSelectorProps {
  fileUri: string | null;
  setFileUri: (uri: string | null) => void;
}

const ImageSelector = ({ fileUri, setFileUri }: ImageSelectorProps) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  let options: ImageLibraryOptions = {
    selectionLimit: 1,
    mediaType: 'photo',
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
        <Icon name={'times'} onPressFunction={() => setFileUri(null)} />
      </View>
    );
  };

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.body}>
            <ModalView
              isModalVisible={isModalVisible}
              setModalVisible={setModalVisible}
              launchCamera={launchCamera}
              launchImageLibrary={launchImageLibrary}
            />

            {fileUri !== null && renderFileUri()}
            <TextButton
              onPressFunction={() => setModalVisible(true)}
              text={I18N.t('imageSelector.selectPhoto')}
              hasMarginVertical={true}
              widthFit={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default ImageSelector;
