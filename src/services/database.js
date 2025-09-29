// Product Database
export const products = [
  {
    id: 1,
    name: "Sprinkled Donuts",
    price: 14.00,
    originalPrice: 18.00,
    rating: 3.5,
    stock: 3,
    category: "Donuts",
    description: "Delicious donuts with colorful sprinkles, perfect for any occasion. Made with fresh ingredients and topped with premium sprinkles.",
    images: [
      "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake1.jpg",
    additionalInfo: "These donuts are made fresh daily with premium ingredients. Perfect for breakfast, dessert, or any special occasion.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: [
      {
        id: 1,
        name: "Jane Cooper",
        rating: 5,
        comment: "Absolutely delicious! The sprinkles are perfect and the donuts are so fresh."
      },
      {
        id: 2,
        name: "Melanie Griffith",
        rating: 4,
        comment: "Great taste and quality. Will definitely order again."
      }
    ]
  },
  {
    id: 2,
    name: "Black Forest Pastry",
    price: 12.00,
    originalPrice: null,
    rating: 4.5,
    stock: 8,
    category: "Pastries",
    description: "Rich chocolate pastry with layers of cream and fresh berries.",
    images: [
      "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake2.jpg",
    additionalInfo: "Made with premium Belgian chocolate and fresh seasonal berries.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 3,
    name: "Black Forest Cupcake",
    price: 12.00,
    originalPrice: null,
    rating: 4.2,
    stock: 12,
    category: "Cupcakes",
    description: "Delicious cupcake with chocolate frosting and fresh raspberry.",
    images: [
      "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake4.jpg",
    additionalInfo: "Handcrafted cupcakes with premium ingredients.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 4,
    name: "Macarons with Berries",
    price: 12.00,
    originalPrice: null,
    rating: 4.8,
    stock: 15,
    category: "Macarons",
    description: "Delicate macarons with fresh berry filling.",
    images: [
      "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake5.jpg",
    additionalInfo: "French-style macarons with seasonal berry filling.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 5,
    name: "Beautiful Wedding Cake",
    price: 15.00,
    originalPrice: null,
    rating: 4.9,
    stock: 2,
    category: "Cakes",
    description: "Elegant wedding cake perfect for special occasions.",
    images: [
      "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake3.jpg",
    additionalInfo: "Custom wedding cakes available upon request.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 6,
    name: "Coffee Cup",
    price: 8.00,
    originalPrice: null,
    rating: 3.8,
    stock: 20,
    category: "Accessories",
    description: "Premium coffee cup for your morning brew.",
    images: [
      "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake4.jpg",
    additionalInfo: "High-quality ceramic coffee cup.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 7,
    name: "Chocolate Chip Cookies",
    price: 8.00,
    originalPrice: null,
    rating: 4.3,
    stock: 25,
    category: "Cookies",
    description: "Freshly baked chocolate chip cookies with premium chocolate chips.",
    images: [
     "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake3.jpg",
    additionalInfo: "Made with real butter and premium chocolate chips.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 8,
    name: "Red Velvet Cake",
    price: 25.00,
    originalPrice: 30.00,
    rating: 4.8,
    stock: 5,
    category: "Cakes",
    description: "Classic red velvet cake with cream cheese frosting.",
    images: [
     "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake2.jpg",
    additionalInfo: "Traditional red velvet cake perfect for special occasions.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 9,
    name: "Strawberry Tart",
    price: 12.00,
    originalPrice: null,
    rating: 4.6,
    stock: 15,
    category: "Pastries",
    description: "Delicate tart with fresh strawberries and vanilla cream.",
    images: [
     "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake1.jpg",
    additionalInfo: "Made with seasonal fresh strawberries.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 10,
    name: "Vanilla Cupcake",
    price: 6.00,
    originalPrice: null,
    rating: 4.2,
    stock: 30,
    category: "Cupcakes",
    description: "Classic vanilla cupcake with buttercream frosting.",
    images: [
      "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake3.jpg",
    additionalInfo: "Simple and delicious vanilla cupcake.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 11,
    name: "Chocolate Eclair",
    price: 9.00,
    originalPrice: null,
    rating: 4.5,
    stock: 20,
    category: "Pastries",
    description: "French-style chocolate eclair with rich cream filling.",
    images: [
      "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake2.jpg",
    additionalInfo: "Authentic French pastry with chocolate glaze.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 12,
    name: "Lemon Meringue Pie",
    price: 18.00,
    originalPrice: null,
    rating: 4.7,
    stock: 8,
    category: "Pies",
    description: "Tangy lemon filling with fluffy meringue topping.",
    images: [
     "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake1.jpg",
    additionalInfo: "Perfect balance of sweet and tart flavors.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 13,
    name: "Cinnamon Roll",
    price: 7.00,
    originalPrice: null,
    rating: 4.4,
    stock: 22,
    category: "Pastries",
    description: "Warm cinnamon roll with cream cheese glaze.",
    images: [
     "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake4.jpg",
    additionalInfo: "Freshly baked with aromatic cinnamon.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 14,
    name: "Tiramisu",
    price: 16.00,
    originalPrice: null,
    rating: 4.9,
    stock: 12,
    category: "Desserts",
    description: "Classic Italian tiramisu with coffee and mascarpone.",
    images: [
     "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake3.jpg",
    additionalInfo: "Authentic Italian dessert with espresso.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 15,
    name: "Cheesecake Slice",
    price: 11.00,
    originalPrice: null,
    rating: 4.6,
    stock: 18,
    category: "Cakes",
    description: "Rich New York style cheesecake with graham cracker crust.",
    images: [
     "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake4.jpg",
    additionalInfo: "Creamy and dense cheesecake perfection.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 16,
    name: "Fruit Tart",
    price: 13.00,
    originalPrice: null,
    rating: 4.3,
    stock: 14,
    category: "Pastries",
    description: "Mixed fruit tart with vanilla pastry cream.",
    images: [
     "/images/cake1.jpg",
      "/images/cake2.jpg",
      "/images/cake3.jpg",
      "/images/cake4.jpg",
      "/images/cake5.jpg"
    ],
    mainImage: "/images/cake5.jpg",
    additionalInfo: "Fresh seasonal fruits on sweet pastry.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  }
];

export const categories = [
  "All",
  "Donuts",
  "Pastries",
  "Cupcakes",
  "Macarons",
  "Cakes",
  "Accessories",
  "Cookies",
  "Pies",
  "Desserts"
];

export const teamMembers = [
  {
    id: 1,
    name: "Ms Anushka Kulkarni",
    position: "Frontend Dev",
    image: "public/team/anushka.jpg"
  },
  {
    id: 2,
    name: "Ms Maria S",
    position: "Frontend Dev",
    image: "public/team/maria.jpg"
  },
  {
    id: 3,
    name: "Mr Akshay S Gupta",
    position: "Frontend Dev",
    image: "public/team/akshay.jpg"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "10 Reasons Why A Cake Is The Best Dessert",
    date: "27th July 2023",
    image: "https://picsum.photos/400/300?random=27",
    excerpt: "Discover why cakes are the ultimate dessert choice..."
  },
  {
    id: 2,
    title: "The Best Of Autumn And Summer's Flavors In A Cake",
    date: "27th July 2023",
    image: "https://picsum.photos/400/300?random=28",
    excerpt: "Explore seasonal flavors in our latest cake creations..."
  },
  {
    id: 3,
    title: "DIY Cookies: Bringing Deliciousness To Your Kitchen",
    date: "27th July 2023",
    image: "https://picsum.photos/400/300?random=29",
    excerpt: "Learn how to make delicious cookies at home..."
  },
  {
    id: 4,
    title: "Great Baking: Finding The Perfect Balance",
    date: "27th July 2023",
    image: "https://picsum.photos/400/300?random=30",
    excerpt: "Master the art of baking with perfect balance..."
  }
];
