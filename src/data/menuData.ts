import type { MenuItem } from '../types';

export const menuCategories = [
  { id: 'appetizers', name: 'Starters', emoji: '🥗' },
  { id: 'mains', name: 'Main Course', emoji: '🍛' },
  { id: 'breads', name: 'Indian Breads', emoji: '🫓' },
  { id: 'rice', name: 'Rice & Biryani', emoji: '🍚' },
  { id: 'desserts', name: 'Desserts', emoji: '🍮' },
  { id: 'beverages', name: 'Beverages', emoji: '🥤' },
];

export const menuItems: MenuItem[] = [
  // Starters/Appetizers
  {
    id: '1',
    name: 'onion Samosa (2 pcs)',
    description: 'Crispy pastry filled with spiced potatoes and peas',
    price: 80,
    category: 'appetizers',
    image: 'https://cookingfromheart.com/wp-content/uploads/2021/06/Onion-Samosa-Prep-21.jpg',
    popular: true,
    link: ''
  },
  {
    id: '2',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese marinated in aromatic spices',
    price: 220,
    category: 'appetizers',
    image: 'https://derafarms.com/cdn/shop/files/deraproducts-2024-06-26T165127.117.png?v=1719400896',
    link: ''
  },
  {
    id: '3',
    name: 'Chicken 65',
    description: 'Spicy deep-fried chicken with curry leaves and chilies',
    price: 280,
    category: 'appetizers',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2YZC90rqFoT6JHzd39KWKK0fetZC8DFi1oU-XTivHcgPoCA7rgu4GGQqaTwjX1TyjxDjdKmwg1mvXAWtGoBNX1SyRqh6J3muqSWLFHkAMAaUl-TzIqKrhra_OuvlaCP7JFk0UtA667lA/w1200-h630-p-k-no-nu/chicken+65+new.jpg',
    popular: true,
    link: ''
  },
  {
    id: '4',
    name: 'Aloo Tikki Chat',
    description: 'Crispy potato patties with tangy chutneys and yogurt',
    price: 120,
    category: 'appetizers',
    image: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/06/tikki-thumbnail.jpg',
    link: ''
  },
  {
    id: '38',
    name: 'Chicken Tikka',
    description: 'Tender chicken pieces marinated and grilled in tandoor',
    price: 300,
    category: 'appetizers',
    image: 'https://sinfullyspicy.com/wp-content/uploads/2014/03/1200-by-1200-images-2-500x375.jpg',
    popular: true,
    link: ''
  },
  {
    id: '39',
    name: 'Mutton Seekh Kebab',
    description: 'Spiced minced mutton grilled on skewers',
    price: 350,
    category: 'appetizers',
    image: 'https://orders.popskitchen.in/storage/2024/09/image-337.png',
    link: ''
  },
  {
    id: '40',
    name: 'Fish Tikka',
    description: 'Marinated fish pieces grilled to perfection',
    price: 320,
    category: 'appetizers',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRSgHkZHZXuO3x-aam3tiltikDFkveeQk5Q77ADRWKmUiqLixazWt2oqhiJJyBgylCI7rBGakfiKwMtGNzlBEF40OnDVVrBnRwjXtKqZ8BG4EGvMkTRQse6KcqurkwZP1YC4FkATkWYOWU/s1600-rw/Tandoori+Fish+Mackerel+Tandoori+.jpg',
    link: ''
  },
  {
    id: '41',
    name: 'Chicken Wings',
    description: 'Spicy tandoori chicken wings with mint chutney',
    price: 260,
    category: 'appetizers',
    image: 'https://wp-cdn.typhur.com/wp-content/uploads/2025/02/buffalo-wings.jpg',
    link: ''
  },
  {
    id: '42',
    name: 'Prawn Koliwada',
    description: 'Crispy fried prawns with spicy coating',
    price: 380,
    category: 'appetizers',
    image: 'https://headbangerskitchen.com/wp-content/uploads/2024/01/PRAWANSKOLIWADA-Horizontal.jpg',
    link: ''
  },

  // Main Course
  {
    id: '5',
    name: 'Butter Chicken',
    description: 'Tender chicken in rich tomato and cream gravy',
    price: 350,
    category: 'mains',
    image: 'https://vismaifood.com/storage/app/uploads/public/ad2/3c9/7ee/thumb__1200_0_0_0_auto.jpg',
    popular: true,
    link: ''
  },
  {
    id: '6',
    name: 'Paneer Makhani',
    description: 'Cottage cheese in creamy tomato-based curry',
    price: 320,
    category: 'mains',
    image: 'https://www.cookwithkushi.com/wp-content/uploads/2022/08/restaurant_style_paneer_makhani_00.jpg',
    link: ''
  },
  {
    id: '7',
    name: 'Dal Tadka',
    description: 'Yellow lentils tempered with cumin and spices',
    price: 180,
    category: 'mains',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/dal-tadka-recipe-500x500.jpg',
    popular: true,
    link: ''
  },
  {
    id: '8',
    name: 'Chicken Tikka Masala',
    description: 'Grilled chicken in spiced tomato curry',
    price: 380,
    category: 'mains',
    image: 'https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG',
    link: ''
  },
  {
    id: '9',
    name: 'Palak Paneer',
    description: 'Cottage cheese in creamy spinach gravy',
    price: 290,
    category: 'mains',
    image: 'https://www.kannammacooks.com/wp-content/uploads/restaurant-style-palak-paneer-recipe-1-35.jpg',
    popular: true,
    link: ''
  },
  {
    id: '26',
    name: 'Chicken Curry',
    description: 'Traditional home-style chicken curry with aromatic spices',
    price: 340,
    category: 'mains',
    image: 'https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg',
    link: ''
  },
  {
    id: '27',
    name: 'Mutton Curry',
    description: 'Tender mutton pieces in rich, spiced gravy',
    price: 450,
    category: 'mains',
    image: 'https://i.ytimg.com/vi/-KbBMYKbmGY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0TULBGgVs8xYmD9wfepdNdtwSRg',
    link: ''
  },
  {
    id: '28',
    name: 'Fish Curry',
    description: 'Fresh fish cooked in coconut-based curry',
    price: 380,
    category: 'mains',
    image: 'https://vismaifood.com/storage/app/uploads/public/daa/96d/7bc/thumb__700_0_0_0_auto.jpg',
    link: ''
  },
  {
    id: '29',
    name: 'Chicken Korma',
    description: 'Mild chicken curry in creamy cashew and yogurt sauce',
    price: 360,
    category: 'mains',
    image: 'https://i.ytimg.com/vi/m2okfgCQqh4/maxresdefault.jpg',
    link: ''
  },
  {
    id: '30',
    name: 'Tandoori Chicken',
    description: 'Clay oven roasted chicken marinated in yogurt and spices',
    price: 320,
    category: 'mains',
    image: 'https://www.easycookingwithmolly.com/wp-content/uploads/2023/11/air-fryer-whole-tandoori-chicken-3.jpg',
    popular: true,
    link: ''
  },
  {
    id: '31',
    name: 'Chicken Vindaloo',
    description: 'Spicy Goan-style chicken curry with vinegar and chilies',
    price: 370,
    category: 'mains',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/12/chicken-vindaloo-recipe-1.jpg',
    link: ''
  },
  {
    id: '32',
    name: 'Mutton Rogan Josh',
    description: 'Kashmiri-style mutton curry with aromatic spices',
    price: 480,
    category: 'mains',
    image: 'https://www.whiskaffair.com/wp-content/uploads/2019/02/Mutton-Rogan-Josh-2-3.jpg',
    link: ''
  },

  // Indian Breads
  {
    id: '10',
    name: 'Butter Naan',
    description: 'Soft leavened bread brushed with butter',
    price: 60,
    category: 'breads',
    image: 'https://i0.wp.com/www.sharmiskitchen.com/wp-content/uploads/2020/09/Garlic-Naan1.jpg?fit=1199%2C1800&ssl=1',
    popular: true,
    link: ''
  },
  {
    id: '11',
    name: 'Garlic Naan',
    description: 'Naan bread topped with fresh garlic and herbs',
    price: 80,
    category: 'breads',
    image: 'https://allwaysdelicious.com/wp-content/uploads/2022/04/garlic-butter-naan-4.jpg',
    link: ''
  },
  {
    id: '12',
    name: 'Tandoori Roti',
    description: 'Whole wheat bread cooked in tandoor',
    price: 40,
    category: 'breads',
    image: 'https://orders.popskitchen.in/storage/2024/09/image-62.png',
    link: ''
  },
  {
    id: '13',
    name: 'Cheese Naan',
    description: 'Naan stuffed with melted cheese',
    price: 120,
    category: 'breads',
    image: 'https://www.tastefrance.com/sites/default/files/2023-12/NAAN_2%20%281%29.jpg',
    link: ''
  },

  // Rice & Biryani
  {
    id: '14',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice with spiced chicken',
    price: 420,
    category: 'rice',
    image: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg',
    popular: true,
    link: ''
  },
  {
    id: '15',
    name: 'Vegetable Biryani',
    description: 'Aromatic rice with mixed vegetables and spices',
    price: 320,
    category: 'rice',
    image: 'https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg',
    link: ''
  },
  {
    id: '16',
    name: 'Jeera Rice',
    description: 'Basmati rice tempered with cumin seeds',
    price: 150,
    category: 'rice',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/jeera-rice-recipe.webp',
    link: ''
  },
  {
    id: '17',
    name: 'Mutton Biryani',
    description: 'Premium basmati rice with tender mutton pieces',
    price: 520,
    category: 'rice',
    image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg',
    link: ''
  },
  {
    id: '33',
    name: 'Chicken Biryani (Hyderabadi)',
    description: 'Authentic Hyderabadi-style chicken biryani with saffron',
    price: 450,
    category: 'rice',
    image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    popular: true,
    link: ''
  },
  {
    id: '34',
    name: 'Chicken Biryani (Lucknowi)',
    description: 'Awadhi-style chicken biryani cooked in dum method',
    price: 440,
    category: 'rice',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/awadhi-chicken-biryani-.jpg',
    link: 'https://www.indianhealthyrecipes.com/awadhi-chicken-biryani-lucknowi-biryani/',
  },
  {
    id: '35',
    name: 'Fish Biryani',
    description: 'Fragrant basmati rice with marinated fish pieces',
    price: 420,
    category: 'rice',
    image: 'https://ik.imagekit.io/iwcam3r8ka/prod/blog-header/202504/112cf7c4-957c-47b1-893e-5207e5a90891.jpg',
    link: ''
  },
  {
    id: '36',
    name: 'Egg Biryani',
    description: 'Aromatic rice with boiled eggs and spices',
    price: 280,
    category: 'rice',
    image: 'https://palatesdesire.com/wp-content/uploads/2022/05/Egg-biryani-recipe@palates-desire.jpg',
    link: ''
  },
  {
    id: '37',
    name: 'Prawn Biryani',
    description: 'Coastal-style biryani with fresh prawns',
    price: 480,
    category: 'rice',
    image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Prawn-Biryani-Recipe.jpg',
    link: ''
  },

  // Desserts
  {
    id: '18',
    name: 'Gulab Jamun (2 pcs)',
    description: 'Soft milk dumplings in rose-flavored syrup',
    price: 120,
    category: 'desserts',
    image: 'https://namastedesi.in/wp-content/uploads/2022/09/187619cd-cba5-495a-82ba-91b79a457399-133355334124590132.webp',
    popular: true,
    link: ''
  },
  {
    id: '19',
    name: 'Ras Malai (2 pcs)',
    description: 'Cottage cheese dumplings in sweetened milk',
    price: 140,
    category: 'desserts',
    image: 'https://adm.shivamrestaurant.com.sg//Dynamic/Products/3420/Images/Rasmalai2.jpg',
    link: ''
  },
  {
    id: '20',
    name: 'Kulfi',
    description: 'Traditional Indian ice cream with cardamom',
    price: 100,
    category: 'desserts',
    image: 'https://vismaifood.com/storage/app/uploads/public/62f/fce/e1d/thumb__1200_0_0_0_auto.jpg',
    link: ''
  },
  {
    id: '21',
    name: 'Kheer',
    description: 'Rice pudding with milk, nuts and cardamom',
    price: 110,
    category: 'desserts',
    image: 'https://www.spiceupthecurry.com/wp-content/uploads/2021/10/kheer-recipe-2-500x375.jpg',
    link: ''
  },

  // Beverages
  {
    id: '22',
    name: 'Mango Lassi',
    description: 'Creamy yogurt drink with fresh mango',
    price: 80,
    category: 'beverages',
    image: 'https://beextravegant.com/wp-content/uploads/2023/06/DSC03864.jpg',
    popular: true,
    link: ''
  },
  {
    id: '23',
    name: 'Masala Chai',
    description: 'Spiced Indian tea with milk',
    price: 40,
    category: 'beverages',
    image: 'https://spicestationsilverlake.com/wp-content/uploads/2023/03/An-Introduction-to-Masala-Chai-Indias-Spiced-Tea.jpg',
    link: ''
  },
  {
    id: '24',
    name: 'Fresh Lime Water',
    description: 'Refreshing lime juice with mint',
    price: 60,
    category: 'beverages',
    image: 'https://cdn.healthyrecipes101.com/recipes/images/juices/lime-water-recipe-clakqp6wq000epw1b7tpvdvls.webp',
    link: ''
  },
  {
    id: '25',
    name: 'Buttermilk',
    description: 'Spiced yogurt drink with curry leaves',
    price: 50,
    category: 'beverages',
    image: 'https://delishbite.in/wp-content/uploads/2023/07/Blog_1.jpg',
    link: ''
  },
];