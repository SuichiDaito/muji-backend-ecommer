'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        id_type: 1,
        id_color: 1,
        id_size: 1,
        name: 'Organic Cotton T-Shirt',
        price_original: 100,
        created_at: new Date(),
        deleted_at: null,
      },
      {
        id_type: 2,
        id_color: 2,
        id_size: 2,
        name: 'Canvas Low Cut Sneakers',
        price_original: 200,
        created_at: new Date(),
        deleted_at: null,
      },
      {
        id_type: 3,
        id_color: 3,
        id_size: 3,
        name: 'Minimal Strap Sandals',
        price_original: 150,
        created_at: new Date(),
        deleted_at: null,
      },
      {
        id_type: 4,
        id_color: 4,
        id_size: 4,
        name: 'Cotton Twill Cap',
        price_original: 80,
        created_at: new Date(),
        deleted_at: null,
      },
      {
        id_type: 5,
        id_color: 5,
        id_size: 1,
        name: 'Compact Fabric Pouch',
        price_original: 50,
        created_at: new Date(),
        deleted_at: null,
      },
      {
        id_type: 1,
        id_color: 2,
        id_size: 2,
        name: 'Washed Cotton Long Sleeve Shirt',
        price_original: 120,
        created_at: new Date(),
        deleted_at: null,
      },
      {
        id_type: 2,
        id_color: 3,
        id_size: 3,
        name: 'Lightweight Slip-On Shoes',
        price_original: 220,
        created_at: new Date(),
        deleted_at: null,
      },
      {
        id_type: 3,
        id_color: 4,
        id_size: 4,
        name: 'Soft Sole Indoor Sandals',
        price_original: 160,
        created_at: new Date(),
        deleted_at: null,
      },
      {
        id_type: 4,
        id_color: 5,
        id_size: 1,
        name: 'Wool Blend Beanie',
        price_original: 90,
        created_at: new Date(),
        deleted_at: null,
      },
      {
        id_type: 5,
        id_color: 1,
        id_size: 2,
        name: 'Nylon Utility Bag',
        price_original: 60,
        created_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};