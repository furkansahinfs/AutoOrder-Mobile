export const getBackShelfItems = () => {
  return [
    { name: 'Milk', size: '1X', type: 'Back' },
    { name: 'Juice', size: '1X', type: 'Back' },
    { name: 'Yoghurt', size: '3X', type: 'Back' },
    { name: 'Jam', size: '2X', type: 'Back' },
    { name: 'Buttermilk', size: '1X', type: 'Back' },
  ];
};

export const getFrontShelfItems = () => {
  return [
    { name: 'Egg', size: '2X', type: 'Front' },
    { name: 'Cheese', size: '2X', type: 'Front' },
    { name: 'Chocolate', size: '1X', type: 'Front' },
    { name: 'Olive', size: '1X', type: 'Front' },
    { name: 'Butter', size: '2X', type: 'Front' },
    { name: 'Tomato Paste', size: '1X', type: 'Front' },
    { name: 'Baby Food', size: '1X', type: 'Front' },
  ];
};

export function getItemNameWoutSpace(itemName: string) {
  return itemName
    .split(' ')
    .filter((s) => s)
    .join('');
}
