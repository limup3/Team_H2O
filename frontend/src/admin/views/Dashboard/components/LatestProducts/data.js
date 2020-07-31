import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: '처방전1(Dropbox)',
    imageUrl: '/admin_images/products/처방전1.jpg',
    // imageUrl: '/admin_images/products/product_1.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: '처방전2(Medium Corporation)',
    imageUrl: '/admin_images/products/처방전2.jpg',
    // imageUrl: '/admin_images/products/product_2.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: '처방전3(Slack)',
    imageUrl: '/admin_images/products/처방전3.jpg',
    // imageUrl: '/admin_images/products/product_3.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: '처방전4(Lyft)',
    imageUrl: '/admin_images/products/처방전4.jpg',
    // imageUrl: '/admin_images/products/product_5.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: '처방전5(GitHub)',
    imageUrl: '/admin_images/products/처방전5.jpg',
    // imageUrl: '/admin_images/products/product_5.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];
