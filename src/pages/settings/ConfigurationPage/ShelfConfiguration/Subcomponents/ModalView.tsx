import React from 'react';
import { Modal, ScrollView, View } from 'react-native';
import { DropdownMenu, Icon } from '../../../../../components';
import { I18N } from '../../../../../locales';
import { stylesGlobal } from '../../../../../styles';
import { ItemProps } from '../../../../../assets';
import { useTheme } from '../../../../../theme';
import styles from './ModalView.styles';

interface ModalViewProps {
  setModalVisible: (visibility: boolean) => void;
  isModalVisible: boolean;
  shelfItems: Array<ItemProps>;
  shelfChoices: Array<ItemProps>;
  setShelfChoices: React.Dispatch<React.SetStateAction<any[]>>;
  closeModalFunction: () => void;
}
const ModalView = ({
  setModalVisible,
  isModalVisible,
  shelfItems,
  shelfChoices,
  setShelfChoices,
  closeModalFunction,
}: ModalViewProps) => {
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={isModalVisible}
      onRequestClose={() => {
        setModalVisible(false);
        closeModalFunction();
      }}
    >
      <View style={[styles.view, { backgroundColor: colors.background2 }]}>
        <View style={globalStyles.center}>
          <Icon
            name={'times'}
            onPressFunction={() => {
              setModalVisible(!isModalVisible);
              closeModalFunction();
            }}
          />
        </View>
        <ScrollView
          contentContainerStyle={[globalStyles.modalView, { backgroundColor: colors.background2 }]}
        >
          <DropdownMenu
            choices={shelfItems}
            currentChoice={shelfChoices}
            setChoice={setShelfChoices}
            multipleChoice={true}
            dropdownTitle={I18N.t('shelfConfigurationPage.selectShelfItems')}
            itemKey={'name'}
          />
        </ScrollView>
      </View>
    </Modal>
  );
};
export default ModalView;
