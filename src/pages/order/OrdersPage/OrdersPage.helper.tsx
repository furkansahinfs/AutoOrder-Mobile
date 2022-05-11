import { GetOrdersRequest } from '../../../api';

export async function getOrders() {
  //const result = await GetOrdersRequest();
  //return result instanceof Array ? result : [];
  return { data: { content: testData }, status: 200 };
}

const testData = [
  {
    id: 3,
    details: [
      { name: 'İçim Milk', brand: 'Ülker', price: 80, quantity: 1 },
      { name: 'İçim Cheese', brand: 'Ülker', price: 80, quantity: 1 },
      { name: 'İçim Butter', brand: 'Ülker', price: 80, quantity: 1 },
    ],
    price: 160,
    address: 'Gülbahçe, İzmir Yüksek Teknoloji Enstitüsü, 35430 Urla/İzmir',
    createdAt: '2022-05-10T17:48:00.000Z',
  },
  {
    id: 2,
    details: [
      { name: 'İçim Milk', brand: 'Ülker', price: 80, quantity: 1 },
      { name: 'İçim Cheese', brand: 'Ülker', price: 80, quantity: 1 },
      { name: 'İçim Egg', brand: 'Ülker', price: 80, quantity: 1 },
    ],
    price: 220,
    address: 'Gülbahçe, İzmir Yüksek Teknoloji Enstitüsü, 35430 Urla/İzmir',
    createdAt: '2022-05-03T17:48:00.000Z',
  },
  {
    id: 1,
    details: [
      { name: 'İçim Chocolate', brand: 'Ülker', price: 80, quantity: 1 },
      { name: 'İçim Milk', brand: 'Ülker', price: 80, quantity: 1 },
      { name: 'İçim Cheese', brand: 'Ülker', price: 80, quantity: 1 },
    ],
    price: 110,
    address: 'Gülbahçe, İzmir Yüksek Teknoloji Enstitüsü, 35430 Urla/İzmir',
    createdAt: '2022-04-28T17:48:00.000Z',
  },
];
