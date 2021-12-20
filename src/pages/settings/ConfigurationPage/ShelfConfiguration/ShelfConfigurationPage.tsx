import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { Images, ItemProps } from '../../../../assets';
import { Header, Icon, TextButton } from '../../../../components';
import { I18N } from '../../../../locales';
import { stylesGlobal } from '../../../../styles';
import { useTheme } from '../../../../theme';
import { getBackShelfItems, getFrontShelfItems } from './ShelfConfiguration.helper';
import styles from './ShelfConfigurationPage.styles';
import ModalView from './Subcomponents/ModalView';

const ShelfConfigurationPage = ({ route }) => {
  const shelfType = route.params.shelfType;
  const [shelfChoices, setShelfChoices] = useState<Array<ItemProps>>([]);
  const [shelfItems, setShelfItems] = useState<Array<ItemProps>>([]);
  const [totalSize, setTotalSize] = useState<number>(0);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  useEffect(() => {
    (async () => {
      await init();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = async () => {
    let items = [];
    if (shelfType === 'Back') {
      items = getBackShelfItems();
    } else {
      items = getFrontShelfItems();
    }
    setShelfItems(items);
  };

  const calculateTotalSize = () => {
    let total = 0;
    shelfChoices.forEach((element: ItemProps) => {
      total += parseInt(element.size.slice(0, -1), 10);
    });

    setTotalSize(total);
  };

  const emptyView = (
    <View style={styles.nodataView}>
      <Image source={Images.nodata} style={styles.nodataImage} />
      <Text style={[globalStyles.labelBigger, globalStyles.centerText, { color: colors.text }]}>
        {I18N.t('shelfConfigurationPage.noData')}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background2 }]}>
      <Header
        back={true}
        title={I18N.t('shelfConfigurationPage.header')}
        rightIcon={<Icon name={'star'} onPressFunction={() => setModalVisible(!isModalVisible)} />}
      />
      <View style={styles.view}>
        <FlatList
          data={shelfChoices}
          style={[styles.flatlist, { backgroundColor: colors.background2 }]}
          contentContainerStyle={[styles.flatlist, { backgroundColor: colors.background2 }]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }: { item: ItemProps }) => (
            <Card containerStyle={[globalStyles.card, styles.cardOverride]}>
              <View style={globalStyles.row}>
                <Image source={Images.items[item.name]} style={styles.image} />
                <View style={styles.cardItem}>
                  <Text style={globalStyles.labelBigger}>{item.name}</Text>
                  <Text style={globalStyles.labelSmaller}>
                    {I18N.t('shelfConfigurationPage.size') + ' : ' + item.size}
                  </Text>
                </View>
              </View>
            </Card>
          )}
          ListEmptyComponent={emptyView}
        />

        {shelfChoices.length > 0 ? (
          <View
            style={[
              styles.totalSizeView,
              {
                backgroundColor: colors.background2,
                borderColor: colors.border,
              },
            ]}
          >
            <Text style={[styles.totalSizeText, { color: colors.text }]}>
              {I18N.t('shelfConfigurationPage.totalSize') + ' : ' + totalSize + '/10x'}
            </Text>
            <TextButton
              onPressFunction={() => console.log('aaa')}
              text={I18N.t('shelfConfigurationPage.adjustConfiguration')}
              hasMarginVertical={true}
            />
          </View>
        ) : null}

        <ModalView
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          setShelfChoices={setShelfChoices}
          shelfChoices={shelfChoices}
          shelfItems={shelfItems}
          closeModalFunction={calculateTotalSize}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShelfConfigurationPage;
