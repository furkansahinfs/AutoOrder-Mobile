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
    if (element.productName.toLocaleLowerCase().includes(key.toLocaleLowerCase())) {
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

export const calculateTotalPrice = (orderItems: Array<OrderItemDetailProp>) => {
  let total = 0;
  orderItems.forEach((element) => {
    total = total + element.price;
  });
  return total.toFixed(2);
};
