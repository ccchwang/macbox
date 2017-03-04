const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', admin: true, password: '1234'},
  {name: 'Barack Obama', email: 'admin@example.com', admin: true, password: '1234'},
  {name: 'Anne', email: 'anne@gmail.com', admin: false, password: '1234'},
  {name: 'Chloe', email: 'chloe@gmail.com', admin: false, password: 'abcd'},
  {name: 'Aria', email: 'aria@gmail.com', admin: false, password: 'aria'},
  {name: 'Susan', email: 'susan@gmail.com', admin: false, password: 'susan'},
], user => db.model('users').create(user))

const seedReviews = () => db.Promise.map([
  {description: "The cutest, most fluffiest ball of love you've ever seen! Will snuggle you for hours!",
    user_id: '1', product_id: '1', rating: '5'
  },
  {description: "Sassy but sweet. She knows she's cute and isn't afraid to flaunt it!",
    user_id: '2', product_id: '2', rating: '4'
  },
  {description: 'Irresistible charm! Looks especially dapper in a top hat and bow tie.',
    user_id: '3', product_id: '3', rating: '5'
  },
  {description: "Feeling down?? Wondering the meaning of life?? This little cutie is an instant pick-me-up and will brighten anyone's day!",
    user_id: '4', product_id: '4', rating: '5'
  },
  {description: "Likes soft blankets, rolling around on the bed, and being the star of the show!",
    user_id: '5', product_id: '5', rating: '4'
  },
  {description: "Sorta meh but still lovable!", user_id: '1', product_id: '6', rating: '3'  },
  {description: "Will do the trick!", user_id: '3', product_id: '8', rating: '3'},
  {description: "Sweetest little pig in the world! Best decision of my life!!", user_id: '3', product_id: '7', rating: '5'}
], review => db.model('reviews').create(review))

const seedProducts = () => db.Promise.map([
{name: "Champagne Gold Envelope Sleeve", description: "Sir Thump-a-lot", category: "Macbook Cover", imgUrl: "/img/f1.jpg", price: 8200},
{name: "Patent Black Leather Zip", description: "Sir Thump-a-lot", category: "Macbook Cover", imgUrl: "/img/f3.jpg", price: 8200},
{name: "Glittery Rose Gold Vinyl Zip", description: "Sir Thump-a-lot", category: "Macbook Cover", imgUrl: "/img/f4.jpg", price: 8200},
{name: "Glittery Midnight Black Vinyl Zip", description: "Sir Thump-a-lot", category: "Macbook Cover", imgUrl: "/img/f5.jpg", price: 8200},
{name: 'Weathered Beach Wood', description: "A cute little piglet in boots", category: "Macbook Decal", imgUrl: "/img/c1.jpg", price: 2399},
{name: "Glittery Pink Sleeve", description: "Baby orange tabby cat", category: "Macbook Cover", imgUrl: "/img/f2.jpg", price: 2399},{name: "Clean White Marble", description: "Small dog", category: "Macbook Decal", imgUrl: "/img/c3.jpg", price: 2399},
{name: "Purple Stones Tanzanite", description: "Small giraffe", category: "Macbook Decal", imgUrl: "/img/c5.jpg", price: 2399},
{name: "Bright Pink Ombre", description: "Sir Thump-a-lot", category: "Keyboard Decal", imgUrl: "/img/k11.jpg", price: 1999},
{name: "Clean White Marble", description: "Small dog", category: "Macbook Decal", imgUrl: "/img/c3.jpg", price: 2399},

], products => db.model('products').create(products))

const seedOrders = () => db.Promise.map([
  {status: 'shipped', totalPrice: '6.83', address: '5 Hanover Square', user_id: '1'},
  {status: 'shipping', totalPrice: '3.04', address: '100 Broadway Street', user_id: '2'},
  {status: 'delivered', totalPrice: '1.29', address: '25 Kenmare Street 12:39:46.47-05', user_id: '3'},
  {status: 'shipped', totalPrice: '3.84', address: '10 Walnut Avenue', user_id: '4'},
  {status: 'delivered', totalPrice: '9.66', address: '50 Wall Street', user_id: '5'},
], orders => db.model('orders').create(orders))

const seedLineItems = () => db.Promise.map([
 {orderedPrice: 683, product_id: 2, quantity: 1, order_id: 1},
 {orderedPrice: 152, product_id: 1, quantity: 2, order_id: 2},
 {orderedPrice: 43, product_id: 3, order_id: 3},
 {orderedPrice: 384, product_id: 5, quantity: 1, order_id: 4},
 {orderedPrice: 483, product_id: 4, quantity: 2, order_id: 5},
], lineItems => db.model('lineItems').create(lineItems))

const seedCarts = () => db.Promise.map([
 {user_id: '1'},
 {user_id: '2'},
 {user_id: '3'},
 {user_id: '4'},
 {user_id: '5'},

], cart => db.model('cart').create(cart))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedCarts)
  .then(carts => console.log(`Seeded ${carts.length} carts OK`))
  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedLineItems)
  .then(lineItems => console.log(`Seeded ${lineItems.length} lineItems OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
