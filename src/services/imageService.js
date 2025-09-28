// Image placeholder URLs for development
// Replace these with actual images in production

export const imagePlaceholders = {
  // Product Images
  'donuts-main.jpg': 'https://picsum.photos/600/400?random=1',
  'donuts-grid.jpg': 'https://picsum.photos/300/300?random=2',
  'pink-donuts.jpg': 'https://picsum.photos/300/300?random=3',
  'plain-donuts.jpg': 'https://picsum.photos/300/300?random=4',
  'blue-donut.jpg': 'https://picsum.photos/300/300?random=5',
  'sprinkles-bowl.jpg': 'https://picsum.photos/300/300?random=6',
  'chocolate-cake.jpg': 'https://picsum.photos/300/300?random=7',
  'cupcake.jpg': 'https://picsum.photos/300/300?random=8',
  'macarons.jpg': 'https://picsum.photos/300/300?random=9',
  'wedding-cake.jpg': 'https://picsum.photos/300/300?random=10',
  'coffee-cup.jpg': 'https://picsum.photos/300/300?random=11',

  // Hero Images
  'hero-cupcakes.jpg': 'https://picsum.photos/800/600?random=12',
  'promotional-bg.jpg': 'https://picsum.photos/800/400?random=13',
  'products-donut.jpg': 'https://picsum.photos/600/400?random=14',
  'mini-donuts.jpg': 'https://picsum.photos/400/300?random=15',
  'quality-dessert.jpg': 'https://picsum.photos/600/400?random=16',

  // About Page Images
  'bakery-interior.jpg': 'https://picsum.photos/600/400?random=17',
  'donut-hand.jpg': 'https://picsum.photos/300/300?random=18',
  'pastries-display.jpg': 'https://picsum.photos/300/300?random=19',
  'cake-display.jpg': 'https://picsum.photos/300/300?random=20',

  // Team Images
  'team-member-1.jpg': 'https://picsum.photos/300/300?random=21',
  'team-member-2.jpg': 'https://picsum.photos/300/300?random=22',
  'team-member-3.jpg': 'https://picsum.photos/300/300?random=23',
  'team-member-4.jpg': 'https://picsum.photos/300/300?random=24',
  'team-member-5.jpg': 'https://picsum.photos/300/300?random=25',
  'team-member-6.jpg': 'https://picsum.photos/300/300?random=26',

  // Blog Images
  'blog-1.jpg': 'https://picsum.photos/400/300?random=27',
  'blog-2.jpg': 'https://picsum.photos/400/300?random=28',
  'blog-3.jpg': 'https://picsum.photos/400/300?random=29',
  'blog-4.jpg': 'https://picsum.photos/400/300?random=30',

  // Background Images
  'banner-bg.jpg': 'https://picsum.photos/1200/400?random=31',
  'newsletter-bg.jpg': 'https://picsum.photos/1200/400?random=32',

  // Payment Icons
  'visa.png': 'https://via.placeholder.com/60x40/1A1F71/FFFFFF?text=VISA',
  'amex.png': 'https://via.placeholder.com/60x40/006FCF/FFFFFF?text=AMEX',
  'mastercard.png': 'https://via.placeholder.com/60x40/EB001B/FFFFFF?text=MC',
  'discover.png': 'https://via.placeholder.com/60x40/FF6000/FFFFFF?text=DISC'
};

// Function to get image URL
export const getImageUrl = (imageName) => {
  return imagePlaceholders[imageName] || '/images/placeholder.jpg';
};
