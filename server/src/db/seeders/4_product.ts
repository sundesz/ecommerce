import { Seeder } from '..';

const seedProducts = [
  {
    id: '82604ecc-ecca-4ca5-88cb-d79060e33a85',
    product_category_id: 'defde9bb-7bca-47ab-a37b-6dbd50a03c30',
    ean: '700715',
    name: 'TCL 32S615 32 "Android LED TV',
    description: `The TCL 32S615 is a sleek, high-quality 32 "basic TV with HD Ready picture quality and Android TV. You have Google Play services and compatibility with Google Assistant *. An optional remote control for voice control is available.

    With the built-in Chromecast, you can share content from your phone to the TV screen. This 32S615 TV is a good choice for smaller rooms or even a summer house.`,
    price: 149,
    quantity: 30,
    url_key: 'tcl-android-led-tv',
  },
  {
    id: '8d8e2b07-e126-4a27-81ec-9cf9f65d9f28',
    product_category_id: 'defde9bb-7bca-47ab-a37b-6dbd50a03c30',
    ean: '634159',
    name: 'Panasonic TX-65HX820E 65 "4K Ultra HD Smart LED TV',
    description: `The Panasonic TX-65HX820E is a 65-inch TV with HDR Bright Panel Plus that ensures the image shows all the details in 4K resolution.
    The TV is equipped with DVB-T2, DVB-C HD and DVB-S2 digital tuners. It also has a CI + connection for pay-TV channels and can be mounted on a wall with a VESA-compliant stand.`,
    price: 899,
    quantity: 3,
    url_key: 'panasonic-tv',
  },
  {
    id: 'd5a9b044-e9a7-4a66-b7f6-dcd32469dbb3',
    product_category_id: 'defde9bb-7bca-47ab-a37b-6dbd50a03c30',
    ean: '32LM6370PLA',
    name: 'LG 32LM6370 32 "Full HD Smart LED TV',
    description: `The LG 32LM6370 is a Full HD smart TV with good picture quality.
    The 32-inch TV has digital tuners that receive high-definition broadcasts: DVB-T2, DVB-S2 and DVB-C HD and CI + for pay-TV cards.

    The quad-core processor displays stylish and detailed images in explosive colors at HD and HDR resolutions. Stunning sound without extra speakers provides a fascinating experience when watching cartoons, movies and playing games.
    `,
    price: 279,
    quantity: 10,
    url_key: 'lg-tv',
  },
  {
    id: '8d017c95-58cc-42ed-a751-e508d6943268',
    product_category_id: 'defde9bb-7bca-47ab-a37b-6dbd50a03c30',
    ean: '692536',
    name: 'Samsung QE55LS03A 55 "The Frame 4K Ultra HD QLED TV',
    description: `Samsung The Frame TVs are designed for your interior. When you're not watching TV, the QE55 LS03A works as a 55-inch screen. This 2021 model is clearly thinner than its predecessor and fits even better into your interior.

    The 4K Ultra HD TV has DVB-T2, DVB-C HD and DVB-S2 digital tuners. It also has a CI + connection for pay-TV channels and you can mount it on the wall with the included No Gap wall mount.`,
    price: 799,
    quantity: 20,
    url_key: 'samsung-tv',
  },
  {
    id: '97f100a6-4c6e-41e6-8fdd-953115ca695b',
    product_category_id: 'defde9bb-7bca-47ab-a37b-6dbd50a03c30',
    ean: '727487',
    name: 'ProCaster 55SL900H 55 "Ultra HD Android LED TV',
    description: `The ProCaster 55SL900H is a new smart TV with an Android TV operating system with a framed design and a slim body that displays a tremendous amount of detail thanks to Direct LED backlighting and 4K Ultra HD resolution. The TV's 1200 CMP picture enhancement technology ensures great picture quality for your content. The TV has DVB-T2 and DVB-C HD digital tuners that support high-definition channels, so it is suitable for both antenna and cable households, as well as a CI + connection for pay-TV channels.`,
    price: 329,
    quantity: 5,
    url_key: 'procaster-tv',
  },

  {
    id: '09521cfa-4216-480d-8f9b-abaf1b65147a',
    product_category_id: 'd3cdf24d-ff91-470e-8972-b1885fc183d9',
    ean: '704099',
    name: 'Ströme Clip fan, white',
    description: `To cool down hot summer days, an efficient Ströme fan with a convenient clip attachment. The fan is equipped with an internal battery, which allows you to take the device with you to both the beach and picnics in the park. Thanks to the clip feature, you can attach the fan to the edge of a child's bed, stroller or even to the corner of a desk`,
    price: 24.9,
    quantity: 4,
    url_key: 'strome-tv',
  },
  {
    id: '71a4d7f0-9ebe-463a-a1cf-c8509948efa6',
    product_category_id: 'd3cdf24d-ff91-470e-8972-b1885fc183d9',
    ean: '538610',
    name: 'Blackstorm mini fridge',
    description: `Now you no longer have to run to the kitchen in the fridge in the middle of a tight game situation or an exciting movie. The Blackstorm mini fridge keeps drinks both close and wonderfully cold. The refrigerator is easy to use, not when the power cord to the wall and the delicacies cool down. Thanks to its handy size and carrying handle, this handy device is easy to take with you, even on the floor or for a night out with friends. The power cord included in the package for the car's cigarette lighter also allows it to be used when traveling on the road. And that's not all! Despite its name, the Blackstorm mini fridge acts as a heater in addition to cooling. The power is not enough to heat the food, but the appliance keeps the veggies and meat pies warm for longer if necessary.`,
    price: 49.9,
    quantity: 20,
    url_key: 'blackstrom-fridge',
  },
  {
    id: '2dbb8a54-41dd-4c62-ac2d-2ae9d11a4b4f',
    product_category_id: 'd3cdf24d-ff91-470e-8972-b1885fc183d9',
    ean: '144513',
    name: 'Helsinki Card for 24 hours / one day for an adult',
    description: `The Helsinki Card is an easy city holiday product! Get yourself a Helsinki Card and you can plan an affordable and varied Helsinki program for a day or more. You can travel by public transport, access many attractions for a single fee, and get discounts at a variety of restaurants and shops. When you buy a Helsinki Card, you will also receive a user guide with comprehensive instructions and a map of Helsinki's main attractions.`,
    price: 38,
    quantity: 100,
    url_key: 'helsinki-card-24',
  },
  {
    id: '796c0a18-5dba-494f-b967-0373ba30e4b1',
    product_category_id: 'd3cdf24d-ff91-470e-8972-b1885fc183d9',
    ean: '98368',
    name: 'Gift card',
    description: `Order this gift card for the amount you want, eg 10 gift cards = 100 euros. In the Special Requests field, you can indicate whether you want the entire amount for one gift card (€ 100) or whether the amount will be split over several cards (eg € 2x50).

    If you want to send the gift card directly to the recipient, enter the payer's address as the billing address and the recipient's address as the mailing address.`,
    price: 5,
    quantity: 100,
    url_key: 'gift-card',
  },

  {
    id: 'ebd6d405-6774-41f7-8cd8-50987b3b21c8',
    product_category_id: '74c78751-3a7b-4c08-8caa-4041eb3d164c',
    ean: '725090',
    name: 'GoPro HERO10 Black',
    description: `Maximum speed and unparalleled ease of use go hand in hand with the HERO10 Black, the most powerful GoPro ever. Are you ready for double the performance? The new revolutionary GP2 processor captures twice as many frames at the same time in 5.5K video quality, 23 megapixel photos, improved twilight performance and border-breaking HyperSmooth 4.0 image stability in all shooting modes are all new features in the HERO10 Black. To make things easier, the HERO10 Black is connected to the cloud, so every time you load the camera, its files are automatically uploaded to the cloud. With a GoPro account and Quik, you get an optimized ecosystem for your GoPro that includes powerful and easy-to-use editing tools and storage for your best shots.`,
    price: 549,
    quantity: 10,
    url_key: 'gopro-hero10',
  },
  {
    id: '2a7b55f0-37ba-49c9-acd8-b55154badcb7',
    product_category_id: '74c78751-3a7b-4c08-8caa-4041eb3d164c',
    ean: '709169',
    name: 'Garmin Dash Cam Mini 2',
    description: `The small camera provides a lot of security. The Garmin Dash Cam 2 is an unobtrusive car camera that records HD-quality video of all the events on the road. When connected to a vehicle power supply, the camera continuously captures and automatically records event videos to the secure Vault cloud service. The Garmin Clarity HDR captures accurate, sharp images during the day and night. With a compatible smartphone, you can remotely connect to the camera for live tracking of a parked car.`,
    price: 115,
    quantity: 20,
    url_key: 'garmin-dash-cam',
  },
  {
    id: 'fe25ed8a-53cb-43c0-afd0-861d5c47241c',
    product_category_id: '74c78751-3a7b-4c08-8caa-4041eb3d164c',
    ean: '543161',
    name: 'Leica Q2 Digital camera',
    description: `The Leica Q2 is an elegant combination of innovation and tradition, performance and durability. Traditional usability and state-of-the-art modern technology are perfect for those photographers who know what they want from their camera. The Made In Germany stamp promises uncompromising quality, as you might expect from a genuine Leica.

    The cinema-sized 47-megapixel sensor and fast Summilux 28mm 1.7 ASPH optics, combined with high-speed autofocus, deliver high-quality images even in difficult conditions, as the Q2's body is completely weatherproof. Shooting from the 3.68 million pixel OLED viewfinder is easy, even in bright light, and the autofocus speed is first-class. Q2's ISO sensitivity reaches as high as 50,000, so twilight is no obstacle.

    The Leica Q2 also offers the user UHD 4K video recording at 30 or 24 frames per second.

    The memory card is sold separately.`,
    price: 6254,
    quantity: 3,
    url_key: 'leica-camera',
  },
  {
    id: 'b6803fe8-717d-4c8d-a14b-bb035d4bedf7',
    product_category_id: '74c78751-3a7b-4c08-8caa-4041eb3d164c',
    ean: '646927',
    name: 'Parrot Anafi USA drone',
    description: `ANAFI USA is a powerful quadcopter designed to meet the requirements of paramedics, fire rescue personnel, search and rescue teams, security agencies and surveying and inspection professionals. Anafi USA offers the industry's first 32x zoom, 4K HDR video and thermal imaging capabilities. The quadcopter is comfortable to carry, safe and durable to use.

    ANAFI USA offers the same state-of-the-art security, durability, and image processing capabilities as the Parrot Short Range Survey (SRR) quadcopter, designed for the U.S. military. ANAFI US data encryption and privacy features comply with the European Union's General Data Protection Regulation (GDPR) and provide best-in-class privacy and security for sensitive tasks.

    ANAFI USA also does not shy away from more difficult weather conditions, but is protected against water and dust according to the IP53 standard. The light helicopter is also able to fly even in windier conditions, providing a stable and high-quality image in winds of up to 15m / s.`,
    price: 8980,
    quantity: 2,
    url_key: 'parrot-drone',
  },

  {
    id: '65adaf62-4128-422e-8980-f16434c298e8',
    product_category_id: '6bf6fd4d-532f-4d96-a4b8-8e3dbf549456',
    ean: '741757',
    name: 'Apple MacBook Pro 16 ”M1',
    description: `The new MacBook Pro delivers groundbreaking performance for professional users. The M1 Pro or even faster M1 Max loads state-of-the-art power into the professional workflow. And impressive battery life, a brilliant 16-inch Liquid Retina XDR display and a range of pro-port ports make the MacBook Pro more versatile than ever.`,
    price: 2078.9,
    quantity: 5,
    url_key: 'macbook-pro-16',
  },
  {
    id: '0e4f1983-ac78-4315-985a-aa69595aacd0',
    product_category_id: '6bf6fd4d-532f-4d96-a4b8-8e3dbf549456',
    ean: '406313',
    name: 'Apple Magic Keyboard with numeric keypad',
    description: `Equipped with a numeric keypad, the Magic Keyboard has an extended layout, full-size arrow keys and keys for quick document scrolling. There is an even more stable scissor mechanism under each key. In addition, key movement has been optimized and the keyboard profile is designed to be low, making typing comfortable and accurate. The numeric keypad is also perfect for spreadsheets and financial buttons. The built-in rechargeable battery lasts a long time and provides power to your keyboard for about a month or more between charges.

    Compatibility: Bluetooth-enabled Mac with macOS 10.12.4 or later. iOS devices with iOS 10.3 or later.`,
    price: 99,
    quantity: 99,
    url_key: 'apple-magic-keyboard',
  },
  {
    id: '87e57372-8f4c-42df-a3e0-f6a161727b88',
    product_category_id: '6bf6fd4d-532f-4d96-a4b8-8e3dbf549456',
    ean: '717656',
    name: 'Lenovo ThinkBook 16p G2 - 16',
    description: `The ThinkBook 16p is a power model in the Lenovo ThinkBook family that delivers performance for creative work and content production, for example. AMD's Ryzen H processors offer more power, and graphics performance is brought about by a separate NVIDIA GeForce RTX series graphics card. High-speed PCIe SSD storage and fast DDR4 memory speed up work by speeding up software and operating system startup.

    The sharp 16:10 aspect ratio factory-calibrated IPS display covers 100 percent of the sRGB color space and offers more vertical image space than usual. The backlit keyboard provides a comfortable feel for typing.

    The whole is built in a durable and stylishly finished two-tone aluminum frame.

    ThinkBook 16p features:

    Model: ThinkBook 16p G2 ACH
    Display: 16 "WQXGA (2560 x 1600) IPS LED 16:10, 400 nit, 100% sRGB, Dolby Vision, X-Rite Pantone factory calibrated matte finish
    Processor: AMD Ryzen 9 5900HX (3.3-4.6 GHz, 8 cores / 16 threads, 4 + 16 MB, 45 W)
    Chipset: integrated in the processor
    Memory: 32 GB (1x16 fixed + 16 GB SO-DIMM) DDR4-3200
    Hard Disk: 1 TB SSD (M.2 PCIe NVMe)
    Graphics Card: NVIDIA GeForce RTX 3060 6GB GDDR6 (Boost Clock 1282 MHz, TGP 75W)
    Sound: HARMAN stereo speakers, dual microphone
    Network features: Wi-Fi 6 (802.11ax, 2x2), Bluetooth 5.2
    Optical drive: no
    Webcam: 1080p, Privacy Shutter
    Security features: Lock interface, TPM 2.0 firmware, fingerprint reader, Privacy Shutter
    Connections: 2 x USB 3.2 Type-C Gen 2 (Power Delivery 3.0, DisplayPort 1.2), 2 x USB 3.2 Gen 1 (1 x always on), headset
    Card reader: MMC, SD, SDHC, SDXC
    Input devices: Splash-proof backlit keyboard, touchpad
    Battery: 71 Wh Li-Po, lasts up to 7 hours
    Power supply: 230W W Slim Tip
    Operating system: Windows 10 Pro 64-bit
    Weight: approx. 1.99 kg
    Dimensions: 356 x 252 x 16.3 - 19.9 mm
    Warranty: 24 months`,
    price: 1999.9,
    quantity: 100,
    url_key: 'lenovo-thinkbook-16-g2',
  },
  {
    id: 'd95eb044-92c6-40a3-baae-1f12206b7ada',
    product_category_id: '6bf6fd4d-532f-4d96-a4b8-8e3dbf549456',
    ean: '698870',
    name: 'Samsung LSP9T The Premiere DLP 4K UST projector',
    description: `The Samsung SP-LSP9T smart projector is a modern and high-performance projector with a triple laser light source and 4K UHD image resolution. Smart Hub brings the most popular streaming services to your projector without the need for separate media players. The projector is mounted close to a wall, for example on a TV platform, from which the projector is able to draw a 90-130 "image size depending on the installation distance.

    The projector has a built-in 4.2-channel, 40-watt sound system that produces a clear and high-quality world of sound. The projector also has FilmMaker mode, which lets you see movies as intended by the director.

    The projector produces a maximum light output of 2800 ANSI lumens, which is enough for even a slightly brighter space. The darkened mode and ALR screen allow for the best possible picture experience.

    Note! It is recommended to use a stretched or fixed frame screen with this projector if you want to use a screen. Other types of screens cause possible ripple in the image due to the short throw distance.`,
    price: 4999,
    quantity: 20,
    url_key: 'samsung-lsp9t-ust-projector',
  },
];

export const up: Seeder = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.bulkInsert('product', seedProducts);
};

export const down: Seeder = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.bulkDelete('product', {
    id: seedProducts.map((p) => p.id),
  });
};
