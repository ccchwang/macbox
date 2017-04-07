const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'Aly', email: 'aly@example.com', admin: true, password: '1234'},
  {name: 'Elle', email: 'elle@example.com', admin: true, password: '1234'},
  {name: 'Anna', email: 'anna@gmail.com', admin: false, password: '1234'},
  {name: 'Chloe', email: 'chloe@gmail.com', admin: false, password: 'abcd'},
  {name: 'Aria', email: 'aria@gmail.com', admin: false, password: 'aria'},
  {name: 'Katie', email: 'katie@gmail.com', admin: false, password: 'susan'},
], user => db.model('users').create(user))

const seedReviews = () => db.Promise.map([
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ",
    user_id: '1', product_id: '1', rating: '5'
  },
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ",
    user_id: '2', product_id: '1', rating: '3'
  },
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ",
    user_id: '2', product_id: '2', rating: '4'
  },
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ",
    user_id: '5', product_id: '2', rating: '5'
  },
  {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ',
    user_id: '3', product_id: '3', rating: '4'
  },
  {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ',
    user_id: '2', product_id: '3', rating: '4'
  },
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ",
    user_id: '4', product_id: '4', rating: '5'
  },
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ",
    user_id: '1', product_id: '4', rating: '5'
  },
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ",
    user_id: '5', product_id: '5', rating: '4'
  },
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ",
    user_id: '1', product_id: '5', rating: '3'
  },
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ", user_id: '1', product_id: '6', rating: '3'  },
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ", user_id: '3', product_id: '6', rating: '5'  },
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ", user_id: '3', product_id: '8', rating: '3'},
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula. ", user_id: '4', product_id: '8', rating: '5'},
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", user_id: '3', product_id: '7', rating: '5'},
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", user_id: '2', product_id: '7', rating: '4'},
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", user_id: '2', product_id: '9', rating: '5'},
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", user_id: '5', product_id: '9', rating: '4'},
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", user_id: '1', product_id: '10', rating: '3'},
  {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", user_id: '3', product_id: '10', rating: '4'}
], review => db.model('reviews').create(review))

const seedProducts = () => db.Promise.map([
{averageRating: "4", name: "Champagne Gold Envelope Sleeve", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Case", imgUrl: "/img/f1.jpg", price: 8200},
{averageRating: "5", name: "Pink Opal Marble Swirl", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Case", imgUrl: "/img/f6.jpg", price: 8200},
{averageRating: "4", name: "Starry Nights", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Case", imgUrl: "/img/f7.jpg", price: 8200},
{averageRating: "5", name: "Patent Black Leather Zip", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Case", imgUrl: "/img/f3.jpg", price: 8200},
{averageRating: "5", name: "Glittery Rose Gold Vinyl Zip", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Case", imgUrl: "/img/f4.jpg", price: 8200},
{averageRating: "4", name: "Glittery Midnight Black Vinyl Zip", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Case", imgUrl: "/img/f5.jpg", price: 8200},
{averageRating: "4", name: "Glittery Pink Sleeve", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Case", imgUrl: "/img/f2.jpg", price: 2399},
{averageRating: "5", name: "Rainbow Opal Swirl", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Decal", imgUrl: "/img/c6.jpg", price: 2399},
{averageRating: "3", name: "Matte White Marble", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Decal", imgUrl: "/img/c7.jpg", price: 2399},
{averageRating: "5", name: "Pink Marble", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Decal", imgUrl: "/img/c4.jpg", price: 2399},
{averageRating: "4", name: "Purple Stones Tanzanite", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Decal", imgUrl: "/img/c5.jpg", price: 2399},
{averageRating: "5", name: "Bright Pink Ombre", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Keyboard Decal", imgUrl: "/img/k11.jpg", price: 1999},
{averageRating: "5", name: "Technicolor Watercolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Decal", imgUrl: "/img/k1.jpg", price: 1999},
{averageRating: "4", name: "Sunset Ombre", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Keyboard Decal", imgUrl: "/img/k5.jpg", price: 1999},
{averageRating: "4", name: "Matte Nude", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Keyboard Decal", imgUrl: "/img/k4.jpg", price: 1999},
{averageRating: "5", name: "Pastel Watercolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Keyboard Decal", imgUrl: "/img/k3.jpg", price: 1999},
{averageRating: "4", name: 'Weathered Beach Wood', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Decal", imgUrl: "/img/c1.jpg", price: 2399},
{averageRating: "4", name: "Pink Blue Ombre", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Keyboard Decal", imgUrl: "/img/k8.jpg", price: 1999},
{averageRating: "5", name: "Blue Nebula Galaxy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Keyboard Decal", imgUrl: "/img/k9.jpg", price: 1999},
{averageRating: "5", name: "Clean White Marble", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus est, pulvinar a tellus ut, volutpat accumsan sem. Duis eleifend rhoncus augue, eget mollis augue efficitur vitae. Donec sollicitudin, mi et mattis interdum, est tellus facilisis metus, non fermentum nisi nibh quis ligula.", category: "Macbook Decal", imgUrl: "/img/c3.jpg", price: 2399},
], products => db.model('products').create(products))

// const seedOrders = () => db.Promise.map([
//   {status: 'shipped', totalPrice: '6.83', address: '5 Hanover Square, ', user_id: '3'},
// ], orders => db.model('orders').create(orders))

// const seedLineItems = () => db.Promise.map([
//  {orderedPrice: 683, product_id: 2, quantity: 1, order_id: 1},
//  {orderedPrice: 152, product_id: 1, quantity: 2, order_id: 1},
//  {orderedPrice: 43, product_id: 3, order_id: 1},
//  {orderedPrice: 384, product_id: 5, quantity: 1, order_id: 1},
//  {orderedPrice: 483, product_id: 4, quantity: 2, order_id: 1},
// ], lineItems => db.model('lineItems').create(lineItems))

// const seedCarts = () => db.Promise.map([
//  {user_id: '1'},
//  {user_id: '2'},
//  {user_id: '3'},
//  {user_id: '4'},
//  {user_id: '5'},

// ], cart => db.model('cart').create(cart))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  // .then(seedCarts)
  // .then(carts => console.log(`Seeded ${carts.length} carts OK`))
  // .then(seedOrders)
  // .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  // .then(seedLineItems)
  // .then(lineItems => console.log(`Seeded ${lineItems.length} lineItems OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
