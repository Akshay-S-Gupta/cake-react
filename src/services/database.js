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
      "/images/donuts/img1.jpg",
      "/images/donuts/img2.jpg",
      "/images/donuts/img3.jpg",
      "/images/donuts/img4.jpg",
      "/images/donuts/img5.jpg"
    ],
    mainImage: "/images/donuts/img1.jpg",
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
      "/images/pastries/Black_Forest_Pastry/img1.jpg",
      "/images/pastries/Black_Forest_Pastry/img2.jpg",
      "/images/pastries/Black_Forest_Pastry/img3.jpg",
      "/images/pastries/Black_Forest_Pastry/img4.jpg",
      "/images/pastries/Black_Forest_Pastry/img5.jpg"
    ],
    mainImage: "/images/pastries/Black_Forest_Pastry/img1.jpg",
    additionalInfo: "Made with premium Belgian chocolate and fresh seasonal berries.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 3,
    name: "Wedding Cake",
    price: 15.00,
    originalPrice: null,
    rating: 4.9,
    stock: 2,
    category: "Cakes",
    description: "Elegant wedding cake perfect for special occasions.",
    images: [
      "/images/cakes/Wedding_Cake/img1.jpg",
      "/images/cakes/Wedding_Cake/img2.jpg",
      "/images/cakes/Wedding_Cake/img3.jpg",
      "/images/cakes/Wedding_Cake/img4.jpg",
      "/images/cakes/Wedding_Cake/img5.jpg"
    ],
    mainImage: "/images/cakes/Wedding_Cake/img1.jpg",
    additionalInfo: "Custom wedding cakes available upon request.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 4,
    name: "Red Velvet Cake",
    price: 25.00,
    originalPrice: 30.00,
    rating: 4.8,
    stock: 5,
    category: "Cakes",
    description: "Classic red velvet cake with cream cheese frosting.",
    images: [
     "/images/cakes/Red_Velvet_Cake/img1.jpg",
      "/images/cakes/Red_Velvet_Cake/img2.jpg",
      "/images/cakes/Red_Velvet_Cake/img3.jpg",
      "/images/cakes/Red_Velvet_Cake/img4.jpg",
      "/images/cakes/Red_Velvet_Cake/img5.jpg"
    ],
    mainImage: "/images/cakes/Red_Velvet_Cake/img1.jpg",
    additionalInfo: "Traditional red velvet cake perfect for special occasions.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 5,
    name: "Strawberry Tart",
    price: 12.00,
    originalPrice: null,
    rating: 4.6,
    stock: 15,
    category: "Pastries",
    description: "Delicate tart with fresh strawberries and vanilla cream.",
    images: [
     "/images/pastries/Strawberry_Tart/img1.jpg",
      "/images/pastries/Strawberry_Tart/img2.jpg",
      "/images/pastries/Strawberry_Tart/img3.jpg",
      "/images/pastries/Strawberry_Tart/img4.jpg",
      "/images/pastries/Strawberry_Tart/img5.jpg"
    ],
    mainImage: "/images/pastries/Strawberry_Tart/img1.jpg",
    additionalInfo: "Made with seasonal fresh strawberries.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 6,
    name: "Vanilla Cupcake",
    price: 6.00,
    originalPrice: null,
    rating: 4.2,
    stock: 30,
    category: "Cakes",
    description: "Classic vanilla cupcake with buttercream frosting.",
    images: [
      "/images/cakes/Vanilla_Cupcake/img1.jpg",
      "/images/cakes/Vanilla_Cupcake/img2.jpg",
      "/images/cakes/Vanilla_Cupcake/img3.jpg",
      "/images/cakes/Vanilla_Cupcake/img4.jpg",
      "/images/cakes/Vanilla_Cupcake/img5.jpg"
    ],
    mainImage: "/images/cakes/Vanilla_Cupcake/img1.jpg",
    additionalInfo: "Simple and delicious vanilla cupcake.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 7,
    name: "Lemon Meringue Pie",
    price: 18.00,
    originalPrice: null,
    rating: 4.7,
    stock: 8,
    category: "Pies",
    description: "Tangy lemon filling with fluffy meringue topping.",
    images: [
     "/images/pies/img1.jpg",
      "/images/pies/img2.jpg",
      "/images/pies/img3.jpg",
      "/images/pies/img4.jpg",
      "/images/pies/img5.jpg"
    ],
    mainImage: "/images/pies/img1.jpg",
    additionalInfo: "Perfect balance of sweet and tart flavors.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 8,
    name: "Cinnamon Roll",
    price: 7.00,
    originalPrice: null,
    rating: 4.4,
    stock: 22,
    category: "Desserts",
    description: "Warm cinnamon roll with cream cheese glaze.",
    images: [
     "/images/desserts/Cinnamon_Roll/img1.jpg",
      "/images/desserts/Cinnamon_Roll/img2.jpg",
      "/images/desserts/Cinnamon_Roll/img3.jpg",
      "/images/desserts/Cinnamon_Roll/img4.jpg",
      "/images/desserts/Cinnamon_Roll/img5.jpg"
    ],
    mainImage: "/images/desserts/Cinnamon_Roll/img1.jpg",
    additionalInfo: "Freshly baked with aromatic cinnamon.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 9,
    name: "Tiramisu",
    price: 16.00,
    originalPrice: null,
    rating: 4.9,
    stock: 12,
    category: "Desserts",
    description: "Classic Italian tiramisu with coffee and mascarpone.",
    images: [
     "/images/desserts/Tiramisu/img1.jpg",
      "/images/desserts/Tiramisu/img2.jpg",
      "/images/desserts/Tiramisu/img3.jpg",
      "/images/desserts/Tiramisu/img4.jpg",
      "/images/desserts/Tiramisu/img5.jpg"
    ],
    mainImage: "/images/desserts/Tiramisu/img1.jpg",
    additionalInfo: "Authentic Italian dessert with espresso.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 10,
    name: "Cheesecake",
    price: 11.00,
    originalPrice: null,
    rating: 4.6,
    stock: 18,
    category: "Cakes",
    description: "Rich New York style cheesecake with graham cracker crust.",
    images: [
     "/images/cakes/Cheesecake/img1.jpg",
      "/images/cakes/Cheesecake/img2.jpg",
      "/images/cakes/Cheesecake/img3.jpg",
      "/images/cakes/Cheesecake/img4.jpg",
      "/images/cakes/Cheesecake/img5.jpg"
    ],
    mainImage: "/images/cakes/Cheesecake/img1.jpg",
    additionalInfo: "Creamy and dense cheesecake perfection.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  },
  {
    id: 11,
    name: "Fruit Tart",
    price: 13.00,
    originalPrice: null,
    rating: 4.3,
    stock: 14,
    category: "Pastries",
    description: "Mixed fruit tart with vanilla pastry cream.",
    images: [
     "/images/pastries/Fruit_Tart/img1.jpg",
      "/images/pastries/Fruit_Tart/img2.jpg",
      "/images/pastries/Fruit_Tart/img3.jpg",
      "/images/pastries/Fruit_Tart/img4.jpg",
      "/images/pastries/Fruit_Tart/img5.jpg"
    ],
    mainImage: "/images/pastries/Fruit_Tart/img1.jpg",
    additionalInfo: "Fresh seasonal fruits on sweet pastry.",
    shippingInfo: "Free shipping on orders over $50. Standard delivery 2-3 business days.",
    reviews: []
  }
];

export const categories = [
  "All",
  "Pastries",
  "Cakes",
  "Donuts",
  "Pies",
  "Desserts"
];

export const teamMembers = [
  {
    id: 1,
    name: "Ms Anushka Kulkarni",
    position: "Frontend Dev",
    image: "team/Anushka.jpg"
  },
  {
    id: 2,
    name: "Ms Maria S",
    position: "Frontend Dev",
    image: "team/Maria.jpg"
  },
  {
    id: 3,
    name: "Mr Akshay S Gupta",
    position: "Frontend Dev",
    image: "team/Akshay.jpg"
  }
];
