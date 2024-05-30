// src/data/products.js
const productData = {
  blue: {
    id: 'blue',
    name: 'BLUE',
    description: 'A timeless classic.',
    images: ['/images/blue.jpg','/images/blueocean.jpg'],
    price: '$99.99',
    bulletPoints: [
        'As seen in staples such as OCEAN and SKY.'
    ]
  },
  orange: {
    id: 'orange',
    name: 'ORANGE',
    description: 'A futuristic vision.',
    images: ['/images/orange.jpg'],
    price: '$89.99',
    bulletPoints: [
        'As seen in SUNSET and JUPITER.'
    ]
  },
  white: {
    id: 'white',
    name: 'WHITE',
    description: 'All-encompessing simplicity.',
    images: ['/images/white.jpg'],
    price: '$79.99',
    bulletPoints: [
        'Seen anywhere the sun reaches.',
        '100% Natural'
    ]
  },
};

export default productData;
