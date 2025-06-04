import IRestaurantCards from '../interfaces/IRestaurantCards';

const restaurantCards: IRestaurantCards[] = [
  {
    id: '1',
    featuredRowTitle: 'Featured',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyFUlccR5_HdpLvs9pLstFkXOS6YkwTJfbA&s',
    title: 'Supentsia',
    rating: 4.8,
    genre: 'Fast Food',
    address: 'Vadyma Hetmana St, 1, Kyiv',
    short_description:
      'Cozy spot serving homemade-style soups and hearty Ukrainian comfort food.',
    dishes: [
      {
        id: '1',
        name: 'Borscht with Pork',
        description:
          'Traditional beet soup with pork, cabbage, and sour cream.',
        price: 95,
        dishImgUrl:
          'https://www.seriouseats.com/thmb/yfX1_61oE0sslBovpNAB59EKoaI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__01__20161212-borscht-vicky-wasik-13-a57b9fc72b0d40f8a4a10e79a9ab78dd.jpg',
      },
      {
        id: '2',
        name: 'Chicken Noodle Soup',
        description: 'Homemade noodles in rich chicken broth with vegetables.',
        price: 85,
        dishImgUrl:
          'https://hips.hearstapps.com/hmg-prod/images/chicken-noodle-soup-index-644c2bec1ce0c.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*',
      },
      {
        id: '3',
        name: 'Mushroom Cream Soup',
        description: 'Creamy soup made with forest mushrooms and herbs.',
        price: 90,
        dishImgUrl:
          'https://www.allrecipes.com/thmb/PKh_MtthZMtG1flNmud0MNgRK7w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13096-Cream-of-Mushroom-Soup-ddmfs-4x3-293-b505e37374d74e81807e8a93bcdd7bab.jpg',
      },
      {
        id: '4',
        name: 'Solyanka',
        description: 'Spicy and sour soup with assorted meats and olives.',
        price: 100,
        dishImgUrl:
          'https://www.recipesfromeurope.com/wp-content/uploads/2022/11/smoked-meat-soup-solyanka.jpg',
      },
      {
        id: '5',
        name: 'Pumpkin Soup',
        description: 'Smooth pumpkin puree with a hint of ginger and cream.',
        price: 80,
        dishImgUrl:
          'https://www.healthyfood.com/wp-content/uploads/2019/07/Creamy-pumpkin-soup-1024x638.jpg',
      },
      {
        id: '6',
        name: 'Green Borscht',
        description: 'Sorrel-based soup with potatoes and boiled egg.',
        price: 85,
        dishImgUrl:
          'https://positivepranic.com/wp-content/uploads/2021/02/green.borscht-3.jpg',
      },
    ],
    long: 'longitude',
    lat: 'latitude',
  },
  {
    id: '2',
    featuredRowTitle: 'Featured',
    imgUrl:
      'https://horeca-ukraine.com/wp-content/uploads/2025/03/SeRP0o8O0iOZhbpsaKmN.jpeg',
    title: 'KFC',
    rating: 4.5,
    genre: 'Fast Food',
    address: 'Akademika Yangelya, 20, Kyiv',
    short_description:
      "World-famous fried chicken with fast service and finger-lickin' good flavor.",
    dishes: [
      {
        id: '7',
        name: 'Original Recipe Chicken Bucket (6 pcs)',
        description: "Six pieces of KFC's signature seasoned fried chicken.",
        price: 199,
        dishImgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sWWeRS-8aZ29d4DQEYNvxsziT7bp_s8_Iw&s',
      },
      {
        id: '8',
        name: 'Zinger Burger',
        description:
          'Spicy crispy chicken fillet with lettuce and mayo in a bun.',
        price: 89,
        dishImgUrl:
          'https://recipefairy.com/wp-content/uploads/2020/08/kfc-zinger-burger.jpg',
      },
      {
        id: '9',
        name: 'Twister Combo',
        description: 'Grilled chicken wrap with fries and a drink.',
        price: 129,
        dishImgUrl:
          'https://images.ctfassets.net/a2mgcrjjefyo/3QxM5DqNcPHCEuTDlLbPXb/b84495b5162a4660f527ee6d5961c700/Twister_combo_9318_Pepsi_1600x1600.png',
      },
      {
        id: '10',
        name: 'Chicken Popcorn (Medium)',
        description: 'Bite-sized pieces of crispy chicken.',
        price: 75,
        dishImgUrl:
          'https://mychickenexpress.in/wp-content/uploads/2024/02/mc_0006_03.png',
      },
      {
        id: '11',
        name: 'Coleslaw Salad',
        description: 'Fresh cabbage and carrot salad with creamy dressing.',
        price: 35,
        dishImgUrl:
          'https://qph.cf2.quoracdn.net/main-qimg-d617742ea38a65c1dc13ec43b4d9ec62-lq',
      },
      {
        id: '12',
        name: 'French Fries (Large)',
        description: 'Crispy golden fries seasoned with salt.',
        price: 45,
        dishImgUrl: 'https://kfc.ee/wp-content/uploads/2021/10/Fries_L.png',
      },
    ],
    long: 'longitude',
    lat: 'latitude',
  },
  {
    id: '3',
    featuredRowTitle: 'Featured',
    imgUrl:
      'https://www.allrecipes.com/thmb/xVGw1xqe1jDcc9jYmNZkY621atQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-burger-king-getty-4x3-2-25772f696b734be5b78cb73cc4529ec7.jpg',
    title: 'Burger King',
    rating: 4.2,
    genre: 'Fast Food',
    address: 'Khreshchatyk, 17 A/2, Kyiv',
    short_description:
      'Flame-grilled burgers and classic sides, served your way every time.',
    dishes: [
      {
        id: '13',
        name: 'Whopper',
        description:
          'Flame-grilled beef patty with lettuce, tomato, pickles, and mayo.',
        price: 99,
        dishImgUrl:
          'https://www.burgerking.ee/images/optimized/products/whopper-desktop-d8cee499661a700caa53bb89104c0e37.png',
      },
      {
        id: '14',
        name: 'Chicken Royale',
        description:
          'Breaded chicken fillet with lettuce and mayo in a sesame bun.',
        price: 89,
        dishImgUrl:
          'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/original-chicken-1.jpg',
      },
      {
        id: '15',
        name: 'Veggie Burger',
        description: 'Plant-based patty with fresh vegetables and sauce.',
        price: 85,
        dishImgUrl:
          'https://burgerking.com.cy/sites/default/files/Veggie%20Burger-01_1.png',
      },
      {
        id: '16',
        name: 'King Nuggets (9 pcs)',
        description: 'Crispy chicken nuggets served with dipping sauce.',
        price: 69,
        dishImgUrl:
          'https://burgerkingks.com/wp-content/uploads/2021/03/Nuggets.png',
      },
      {
        id: '17',
        name: 'Onion Rings (Medium)',
        description: 'Crunchy battered onion rings.',
        price: 49,
        dishImgUrl:
          'https://bkmenu.ca/wp-content/uploads/2024/02/453865cfabe9b323977d312acdf64d81ba296b4b-650x450-1.webp',
      },
      {
        id: '18',
        name: 'Chocolate Sundae',
        description: 'Soft-serve ice cream topped with chocolate sauce.',
        price: 39,
        dishImgUrl: 'https://burgerking.com.cy/sites/default/files/4_0.png',
      },
    ],
    long: 'longitude',
    lat: 'latitude',
  },
  {
    id: '4',
    featuredRowTitle: 'Tasty Discounts',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Food_from_Puzata_Hata_restaurant_in_Lviv.jpg/960px-Food_from_Puzata_Hata_restaurant_in_Lviv.jpg?20170906072704',
    title: 'Puzata Hata',
    rating: 5,
    genre: 'Home vibe',
    address: 'Kontraktova square, 17 A/2, Kyiv',
    short_description:
      'Traditional Ukrainian cuisine buffet with authentic flavors and warm atmosphere.',
    dishes: [
      {
        id: '19',
        name: 'Varenyky with Potatoes (6 pcs)',
        description:
          'Dumplings filled with mashed potatoes, served with sour cream.',
        price: 60,
        dishImgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPlr9lyC3VE0Y9onxGM5w3zBEyBlh76NKDA&s',
      },
      {
        id: '20',
        name: 'Chicken Kyiv',
        description: 'Breaded chicken cutlet filled with herb butter.',
        price: 85,
        dishImgUrl:
          'https://www.allrecipes.com/thmb/L83UAXyDgQ07pivxrLxIX5v7Hqo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/236703_ChefJohnsChickenKiev_MFS-WD-2x1-1-0623099a09b0478491078daeeecb96fd.jpg',
      },
      {
        id: '21',
        name: 'Syrnyky (3 pcs)',
        description: 'Cottage cheese pancakes served with jam or sour cream.',
        price: 50,
        dishImgUrl:
          'https://i2.obozrevatel.com/gallery/2024/6/4/pexels-photo-7663220.jpeg',
      },
    ],
    long: 'longitude',
    lat: 'latitude',
  },
  {
    id: '5',
    featuredRowTitle: 'Tasty Discounts',
    imgUrl:
      'https://glovo.dhmedia.io/image/stores-glovo/stores/7cd3eac48bb630bd0c56d67175a3e2c7b048373e3226b4bcf6aece8ea48f100a?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7ImhlaWdodCI6MjI1fX1d',
    title: 'Mama Focaccia & Papa chacha',
    rating: 4.4,
    genre: 'Italian',
    address: 'Kontraktova square, 18, Kyiv',
    short_description:
      'Georgian-Italian fusion with wine, bread, and bold family-style dishes.',
    dishes: [
      {
        id: '22',
        name: 'Khachapuri Adjaruli',
        description:
          'Boat-shaped bread filled with cheese and topped with an egg.',
        price: 120,
        dishImgUrl:
          'https://images.squarespace-cdn.com/content/v1/556738c2e4b0ab3593aa1f30/1521729842793-MSEL010Z0BPG5ITV46TU/F12A0965-3.jpg',
      },
      {
        id: '23',
        name: 'Focaccia with Rosemary',
        description:
          'Italian flatbread topped with fresh rosemary and olive oil.',
        price: 60,
        dishImgUrl:
          'https://www.kneadsomesweets.com/wp-content/uploads/2024/04/garlic-rosemary-focaccia-11.jpg',
      },
      {
        id: '24',
        name: 'Chacha Carbonara',
        description: 'Pasta carbonara with a splash of Georgian chacha spirit.',
        price: 110,
        dishImgUrl:
          'https://img.postershop.me/cdn-cgi/image/width=640,format=webp/https://img.postershop.me/4959/6456cd83-b337-4682-bcbf-fbcf97805fff_image.jpeg',
      },
    ],
    long: 'longitude',
    lat: 'latitude',
  },
  {
    id: '6',
    featuredRowTitle: 'Offers near you!',
    imgUrl: 'https://rau.ua/wp-content/uploads/2019/01/DSC_6060-1460x972.jpg',
    title: 'Bilyi Nalyv',
    rating: 5,
    genre: 'Ukrainian',
    address: 'Bl. Vysokyi Val, 129, Kyiv',
    short_description:
      'Urban cider bar with street food vibes and affordable local drinks.',
    dishes: [
      {
        id: '25',
        name: 'Classic Hot Dog',
        description: 'Sausage in a bun with mustard and ketchup.',
        price: 45,
        dishImgUrl:
          'https://cdn-media.choiceqr.com/prod-eat-bily-nalyv/menu/SnWPHTR-dDVLWzf-wCCgOUf.jpeg',
      },
      {
        id: '26',
        name: 'Fresh Oysters (per piece)',
        description: 'Served with lemon wedges and mignonette sauce.',
        price: 30,
        dishImgUrl:
          'https://getfish.com.au/cdn/shop/files/Sydney_Rock_Oysters.webp?v=1741129648&width=533',
      },
      {
        id: '27',
        name: 'Dry Apple Cider (330ml)',
        description: 'House-made dry cider.',
        price: 29,
        dishImgUrl:
          'https://cdn-media.choiceqr.com/prod-eat-bily-nalyv/thumbnail_hwrUeHe-HlgKeHq-DbioOHb_p-N-Q.jpeg',
      },
    ],
    long: 'longitude',
    lat: 'latitude',
  },
  {
    id: '7',
    featuredRowTitle: 'Offers near you!',
    imgUrl: 'https://franchise-capital.com/wp-content/uploads/2024/08/logo.png',
    title: 'Drunk cherry',
    rating: 4.9,
    genre: 'Ukrainian',
    address: 'St. Khreshchatyk, 189A, Kyiv',
    short_description:
      'Lively bar serving sweet cherry liqueur shots in a cozy setting.',
    dishes: [
      {
        id: '28',
        name: 'Cherry Liqueur Shot (50ml)',
        description: 'House-made sweet cherry liqueur.',
        price: 50,
        dishImgUrl:
          'https://content.rozetka.com.ua/goods/images/big/520926480.jpg',
      },
      {
        id: '29',
        name: 'Vegan Burger',
        description: 'Bean patty with pickled peppers and fries.',
        price: 120,
        dishImgUrl:
          'https://biancazapatka.com/wp-content/uploads/2020/05/veganer-bohnen-burger.jpg',
      },
      {
        id: '30',
        name: 'Mixed Grill Plate',
        description: 'Assortment of grilled meats and vegetables.',
        price: 180,
        dishImgUrl:
          'https://akispetretzikis.com/photos/114982/summer-bbq-ep.68---10-5-22---ver.jpg',
      },
    ],
    long: 'longitude',
    lat: 'latitude',
  },
];

export default restaurantCards;
