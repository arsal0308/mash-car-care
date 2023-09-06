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
    {name: 'Foam Soap', emoji: '🍔', category: categories[0], price: 5.95},
    {name: 'Foam Soap 1 Gallon', emoji: '🍔', category: categories[4], price: 30.95},
    {name: 'Wheel Cleaner', emoji: '🥪', category: categories[0], price: 6.95},
    {name: 'Wheel Cleaner 1 Gallon', emoji: '🥪', category: categories[0], price: 40.95},
    {name: 'Bug and Tar Remover', emoji: '🌭', category: categories[0], price: 3.95},
    {name: 'Spray Wax 1 Gallon', emoji: '🌭', category: categories[0], price: 37.95},
    {name: 'Quick Detailer', emoji: '🦀', category: categories[0], price: 12.95},
    {name: 'Wash and Wax', emoji: '🍤', category: categories[0], price: 10.95},
    {name: 'Black Plastic Restorer', emoji: '🦞', category: categories[0], price: 9.95},
    {name: 'Scratch Remover', emoji: '🌮', category: categories[0], price: 19.95},
    {name: 'Glass Cleaner', emoji: '🌯', category: categories[0], price: 14.95},
    {name: 'Ceramic Spray Wax', emoji: '🍕', category: categories[0], price: 30.95},
    {name: 'Liquid Wax', emoji: '🍝', category: categories[0], price: 7.95},
    {name: 'Plastic Cleaner and Polish', emoji: '🍞', category: categories[0], price: 1.95},
    {name: 'Tire Shine ', emoji: '🍟', category: categories[0], price: 13.95},
    {name: 'Carpet Cleaner', emoji: '🥗', category: categories[4], price: 13.95},
    {name: 'Leather Cleaner', emoji: '🍨', category: categories[5], price: 16.95},
    {name: 'Leather Care Kit', emoji: '🍨', category: categories[5], price: 32.95},
    {name: 'Interior Detailer', emoji: '🧁', category: categories[5], price: 10.95},
    {name: 'Microfiber Wash Mitt', emoji: '🍮', category: categories[5], price: 8.95},
    {name: 'Clay Bar Kit', emoji: '🍰', category: categories[5], price: 3.95},
    {name: 'Microfiber Towels', emoji: '🥛', category: categories[6], price: 19.95},
    {name: 'Headlight Restoration Kit', emoji: '☕', category: categories[6], price: 23.95},
    {name: 'Glass Towel', emoji: '🍹', category: categories[6], price: 23.95},
  ]);

  console.log(items)

  process.exit();
})();