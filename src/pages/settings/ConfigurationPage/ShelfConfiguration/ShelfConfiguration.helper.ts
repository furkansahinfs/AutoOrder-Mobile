import {
  GetItemsRequest,
  GetShelfConfigurationRequest,
  SetShelfConfigurationRequest,
  UpdateShelfConfigurationRequest,
} from '../../../../api';
import { ItemDTOProps, ItemProps } from '../../../../assets';
import { Toast } from '../../../../components';
import { I18N } from '../../../../locales';

export const getUserShelfItems = async (shelfType: string) => {
  const response = await GetShelfConfigurationRequest(shelfType);
  if (response instanceof Array) {
    return response;
  } else {
    Toast(I18N.t('shelfConfigurationPage.userItemsNotFound'), false);
    return [];
  }
};

export const getShelfItems = async (shelfType: string) => {
  const response = await GetItemsRequest(shelfType);
  if (response instanceof Array) {
    return response;
  }
  return [];
};

const setUserShelfItems = async (shelfType: string, items: Array<ItemDTOProps>) => {
  const response = await SetShelfConfigurationRequest(shelfType, items);
  if (response === true) {
    Toast(I18N.t('shelfConfigurationPage.configurationSetMessage'), false);
  } else {
    Toast(response, false);
  }
};

const updateUserShelfItems = async (shelfType: string, items: Array<ItemDTOProps>) => {
  const response = await UpdateShelfConfigurationRequest(shelfType, items);
  if (response === true) {
    Toast(I18N.t('shelfConfigurationPage.configurationSetMessage'), false);
  } else {
    Toast(response, false);
  }
};

export function getItemNameWoutSpace(itemName: string) {
  return itemName
    .split(' ')
    .filter((s) => s)
    .join('');
}

interface SetShelfProps {
  totalSize: number;
  shelfChoices: Array<ItemProps>;
  shelfType: string;
  isConfigurationEmpty: boolean;
}
export const setShelf = async ({
  totalSize,
  shelfChoices,
  shelfType,
  isConfigurationEmpty,
}: SetShelfProps) => {
  if (totalSize <= 10) {
    const jsonArr: Array<ItemDTOProps> = [];
    shelfChoices.forEach((item) => {
      jsonArr.push({ name: item.name });
    });
    if (isConfigurationEmpty) {
      await setUserShelfItems(shelfType.toLowerCase(), jsonArr);
    } else {
      await updateUserShelfItems(shelfType.toLowerCase(), jsonArr);
    }
  } else {
    Toast(I18N.t('shelfConfigurationPage.shelfSizeError'), false);
  }
};
