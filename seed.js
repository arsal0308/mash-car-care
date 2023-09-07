require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Exterior', sortOrder: 10},
    {name: 'Interior', sortOrder: 20},
    {name: 'Accessories', sortOrder: 30},
    {name: 'Kits', sortOrder: 40},
    {name: 'Bulk', sortOrder: 50}
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Black Plastic Restorer', image: 'url=https://i.imgur.com/NRYxX6G.jpg', category: categories[0], price: 9.95},
    {name: 'Bug and Tar Remover', image: 'url=https://i.imgur.com/LMEJVvo.jpg', category: categories[0], price: 3.95},
    {name: 'Carpet Cleaner', image: 'url=https://i.imgur.com/InvroWu.jpg', category: categories[1], price: 13.95},
    {name: 'Ceramic Spray Wax', image: 'url=https://i.imgur.com/VNjP7Md.jpg', category: categories[0], price: 30.95},
    {name: 'Clay Bar Kit', image: 'url=https://i.imgur.com/dR2KxMU.jpg', category: categories[3], price: 3.95},
    {name: 'Foam Soap', image: 'url=https://i.imgur.com/4IaOvfV.jpg', category: categories[0], price: 5.95},
    {name: 'Foam Soap 1 Gallon', image: 'url=https://i.imgur.com/lNz4gw5.jpg', category: categories[4], price: 30.95},
    {name: 'Glass Cleaner', image: 'url=https://i.imgur.com/gUNZFOw.jpg', category: categories[0], price: 14.95},
    {name: 'Glass Towel', image: 'url=https://i.imgur.com/8oSXFNf.jpg', category: categories[2], price: 23.95},
    {name: 'Headlight Restoration Kit', image: 'url=https://i.imgur.com/T5bEKk5.jpg', category: categories[3], price: 23.95},
    {name: 'Interior Detailer', image: 'url=https://i.imgur.com/lVeAeYR.jpg', category: categories[1], price: 10.95},
    {name: 'Liquid Wax', image: 'url=https://i.imgur.com/kD9lky0.jpg', category: categories[0], price: 7.95},
    {name: 'Leather Care Kit', image: 'url=https://i.imgur.com/QODcwte.jpg', category: categories[1], price: 32.95},
    {name: 'Leather Cleaner', image: 'url=https://i.imgur.com/KHxUNbx.jpg', category: categories[1], price: 16.95},
    {name: 'Microfiber Towels', image: 'url=https://i.imgur.com/X6x9eob.jpg', category: categories[2], price: 19.95},
    {name: 'Microfiber Wash Mitt', image: 'url=https://i.imgur.com/G8Oc8Sp.jpg', category: categories[2], price: 8.95},
    {name: 'Plastic Cleaner and Polish', image: 'url=https://i.imgur.com/Eet88m5.jpg', category: categories[0], price: 1.95},
    {name: 'Quick Detailer', image: 'url=https://i.imgur.com/RXeYW3j.jpg', category: categories[0], price: 12.95},
    {name: 'Scratch Eraser Kit', image: 'url=https://i.imgur.com/v4shXbH.jpg', category: categories[3], price: 19.95},
    {name: 'Spray Wax 1 Gallon', image: 'url=https://i.imgur.com/WaY9qYu.jpg', category: categories[4], price: 37.95},
    {name: 'Tire Shine ', image: 'url=https://i.imgur.com/Xh6quvn.jpg', category: categories[0], price: 13.95},
    {name: 'Wash and Wax', image: 'url=https://i.imgur.com/ckSS1Y9.jpg', category: categories[0], price: 10.95},
    {name: 'Wash and Wax 1 Gallon', image: 'url=https://i.imgur.com/q9JQcZa.jpg', category: categories[4], price: 10.95},
    {name: 'Wheel Cleaner', image: 'url=https://i.imgur.com/agHBdSk.jpg', category: categories[0], price: 6.95},
    {name: 'Wheel Cleaner 1 Gallon', image: 'url=https://i.imgur.com/moT3LZi.jpg', category: categories[4], price: 40.95},
  ]);

  console.log(items)

  process.exit();
})();