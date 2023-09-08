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
    {name: 'Black Plastic Restorer', image: 'https://i.imgur.com/yvwrWrw.jpg', category: categories[0], price: 9.95},
    {name: 'Bug and Tar Remover', image: 'https://i.imgur.com/qzSflJo.jpg', category: categories[0], price: 3.95},
    {name: 'Carpet Cleaner', image: 'https://i.imgur.com/wjyumzf.jpg', category: categories[1], price: 13.95},
    {name: 'Ceramic Spray Wax', image: 'https://i.imgur.com/prDo1oG.jpg', category: categories[0], price: 30.95},
    {name: 'Clay Bar Kit', image: 'https://i.imgur.com/CjL6PLk.jpg', category: categories[3], price: 3.95},
    {name: 'Foam Soap', image: 'https://i.imgur.com/o2YjBeu.jpg', category: categories[0], price: 5.95},
    {name: 'Foam Soap 1 Gallon', image: 'https://i.imgur.com/pbLWMAb.jpg', category: categories[4], price: 30.95},
    {name: 'Glass Cleaner', image: 'https://i.imgur.com/atxRsXI.jpg', category: categories[0], price: 14.95},
    {name: 'Glass Towel', image: 'https://i.imgur.com/jxG7EN4.jpg', category: categories[2], price: 23.95},
    {name: 'Headlight Restoration Kit', image: 'https://i.imgur.com/nm8Ed9x.jpg', category: categories[3], price: 23.95},
    {name: 'Interior Detailer', image: 'https://i.imgur.com/UC35R3W.jpg', category: categories[1], price: 10.95},
    {name: 'Liquid Wax', image: 'https://i.imgur.com/GXRUC1T.jpg', category: categories[0], price: 7.95},
    {name: 'Leather Care Kit', image: 'https://i.imgur.com/u2LQeT5.jpg', category: categories[1], price: 32.95},
    {name: 'Leather Cleaner', image: 'https://i.imgur.com/LjYCrtH.jpg', category: categories[1], price: 16.95},
    {name: 'Microfiber Towels', image: 'https://i.imgur.com/pBUNqBM.jpg', category: categories[2], price: 19.95},
    {name: 'Microfiber Wash Mitt', image: 'https://i.imgur.com/eqjVdPT.jpg', category: categories[2], price: 8.95},
    {name: 'Plastic Cleaner and Polish', image: 'https://i.imgur.com/fbVL3Be.jpg', category: categories[0], price: 1.95},
    {name: 'Quick Detailer', image: 'https://i.imgur.com/aKohAO4.jpg', category: categories[0], price: 12.95},
    {name: 'Scratch Eraser Kit', image: 'https://i.imgur.com/BySuLBa.jpg', category: categories[3], price: 19.95},
    {name: 'Spray Wax 1 Gallon', image: 'https://i.imgur.com/ldtDvil.jpg', category: categories[4], price: 37.95},
    {name: 'Tire Shine ', image: 'https://i.imgur.com/ps0dEnk.jpg', category: categories[0], price: 13.95},
    {name: 'Wash and Wax', image: 'https://i.imgur.com/UMyu0hu.jpg', category: categories[0], price: 10.95},
    {name: 'Wash and Wax 1 Gallon', image: 'https://i.imgur.com/DCcLFsV.jpg', category: categories[4], price: 10.95},
    {name: 'Wheel Cleaner', image: 'https://i.imgur.com/X6fdMCX.jpg', category: categories[0], price: 6.95},
    {name: 'Wheel Cleaner 1 Gallon', image: 'https://i.imgur.com/Fu5WRkR.jpg', category: categories[4], price: 40.95},
  ]);

  console.log(items)

  process.exit();
})();