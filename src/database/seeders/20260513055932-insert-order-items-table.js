'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('order_items', [
      {
        id_order: 1,
        id_product: 1,
        name_product: 'Organic Cotton T-Shirt',
        color_product: 'red',
        size_product: 'S',
        quantity: 1,
        price_original: 100,
        name_payment: 'card',
        gross_amount: 100,
        vat_amount: 10,
        net_amount: 110
      },
      {
        id_order: 2,
        id_product: 2,
        name_product: 'Canvas Low Cut Sneakers',
        color_product: 'blue',
        size_product: 'M',
        quantity: 1,
        price_original: 200,
        name_payment: 'credit_card',
        gross_amount: 200,
        vat_amount: 20,
        net_amount: 220
      },
      {
        id_order: 3,
        id_product: 3,
        name_product: 'Minimal Strap Sandals',
        color_product: 'black',
        size_product: 'L',
        quantity: 2,
        price_original: 150,
        name_payment: 'COD',
        gross_amount: 300,
        vat_amount: 30,
        net_amount: 330
      },
      {
        id_order: 4,
        id_product: 4,
        name_product: 'Cotton Twill Cap',
        color_product: 'white',
        size_product: 'XL',
        quantity: 1,
        price_original: 80,
        name_payment: 'e-commerce',
        gross_amount: 80,
        vat_amount: 8,
        net_amount: 88
      },
      {
        id_order: 5,
        id_product: 5,
        name_product: 'Compact Fabric Pouch',
        color_product: 'green',
        size_product: 'S',
        quantity: 3,
        price_original: 50,
        name_payment: 'card',
        gross_amount: 150,
        vat_amount: 15,
        net_amount: 165
      },
      {
        id_order: 6,
        id_product: 6,
        name_product: 'Washed Cotton Long Sleeve Shirt',
        color_product: 'blue',
        size_product: 'M',
        quantity: 1,
        price_original: 120,
        name_payment: 'credit_card',
        gross_amount: 120,
        vat_amount: 12,
        net_amount: 132
      },
      {
        id_order: 7,
        id_product: 7,
        name_product: 'Lightweight Slip-On Shoes',
        color_product: 'black',
        size_product: 'L',
        quantity: 1,
        price_original: 220,
        name_payment: 'COD',
        gross_amount: 220,
        vat_amount: 22,
        net_amount: 242
      },
      {
        id_order: 8,
        id_product: 8,
        name_product: 'Soft Sole Indoor Sandals',
        color_product: 'white',
        size_product: 'XL',
        quantity: 2,
        price_original: 160,
        name_payment: 'e-commerce',
        gross_amount: 320,
        vat_amount: 32,
        net_amount: 352
      },
      {
        id_order: 9,
        id_product: 9,
        name_product: 'Wool Blend Beanie',
        color_product: 'green',
        size_product: 'S',
        quantity: 1,
        price_original: 90,
        name_payment: 'card',
        gross_amount: 90,
        vat_amount: 9,
        net_amount: 99
      },
      {
        id_order: 10,
        id_product: 10,
        name_product: 'Nylon Utility Bag',
        color_product: 'red',
        size_product: 'M',
        quantity: 2,
        price_original: 60,
        name_payment: 'credit_card',
        gross_amount: 120,
        vat_amount: 12,
        net_amount: 132
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('order_items', null, {

    });
  },
};