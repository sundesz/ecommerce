import { v4 as uuid } from 'uuid';
import { Seeder } from '..';

const seedProductImages = [
  {
    id: uuid(),
    product_id: '82604ecc-ecca-4ca5-88cb-d79060e33a85',
    image_name: 'TCL 32S615 32 "Android LED TV',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: '8d8e2b07-e126-4a27-81ec-9cf9f65d9f28',
    image_name: 'Panasonic TX-65HX820E 65 "4K Ultra HD Smart LED TV',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: 'd5a9b044-e9a7-4a66-b7f6-dcd32469dbb3',
    image_name: 'LG 32LM6370 32 "Full HD Smart LED TV',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: '8d017c95-58cc-42ed-a751-e508d6943268',
    image_name: 'Samsung QE55LS03A 55 "The Frame 4K Ultra HD QLED TV',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: '97f100a6-4c6e-41e6-8fdd-953115ca695b',
    image_name: 'ProCaster 55SL900H 55 "Ultra HD Android LED TV',
    file_location: '',
  },

  {
    id: uuid(),
    product_id: '09521cfa-4216-480d-8f9b-abaf1b65147a',
    image_name: 'Ströme Clip fan, white',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: '71a4d7f0-9ebe-463a-a1cf-c8509948efa6',
    image_name: 'Blackstorm mini fridge',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: '2dbb8a54-41dd-4c62-ac2d-2ae9d11a4b4f',
    image_name: 'Helsinki Card for 24 hours / one day for an adult',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: '796c0a18-5dba-494f-b967-0373ba30e4b1',
    image_name: 'Gift card',
    file_location: '',
  },

  {
    id: uuid(),
    product_id: 'ebd6d405-6774-41f7-8cd8-50987b3b21c8',
    image_name: 'GoPro HERO10 Black',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: '2a7b55f0-37ba-49c9-acd8-b55154badcb7',
    image_name: 'Garmin Dash Cam Mini 2',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: 'fe25ed8a-53cb-43c0-afd0-861d5c47241c',
    image_name: 'Leica Q2 Digital camera',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: 'b6803fe8-717d-4c8d-a14b-bb035d4bedf7',
    image_name: 'Parrot Anafi USA drone',
    file_location: '',
  },

  {
    id: uuid(),
    product_id: '65adaf62-4128-422e-8980-f16434c298e8',
    image_name: 'Apple MacBook Pro 16 ”M1',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: '0e4f1983-ac78-4315-985a-aa69595aacd0',
    image_name: 'Apple Magic Keyboard with numeric keypad',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: '87e57372-8f4c-42df-a3e0-f6a161727b88',
    image_name: 'Lenovo ThinkBook 16p G2 - 16',
    file_location: '',
  },
  {
    id: uuid(),
    product_id: 'd95eb044-92c6-40a3-baae-1f12206b7ada',
    image_name: 'Samsung LSP9T The Premiere DLP 4K UST projector',
    file_location: '',
  },
];

export const up: Seeder = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.bulkInsert('product_image', seedProductImages);
};

export const down: Seeder = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.bulkDelete('product_image', {
    id: seedProductImages.map((p) => p.id),
  });
};
