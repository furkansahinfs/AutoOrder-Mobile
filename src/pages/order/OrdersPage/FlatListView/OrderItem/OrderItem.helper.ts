import { Images, OrderItemDetailProp } from '../../../../../assets';

export function findPicture(orderItemDetail: OrderItemDetailProp[]) {
  let image = '';
  orderItemDetail.forEach((element) => {
    image = searchInImages(element);
    return;
  });
  return image;
}

function searchInImages(element: OrderItemDetailProp) {
  const obj = Images.items;
  let imageName = '';
  for (const key in obj) {
    if (element.name.toLocaleLowerCase().includes(key.toLocaleLowerCase())) {
      imageName = key;
      break;
    }
  }
  return imageName;
}
export function getItemNameWoutSpace(itemName: string) {
  return itemName
    .split(' ')
    .filter((s) => s)
    .join('');
}
