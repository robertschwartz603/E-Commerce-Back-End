// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

const sequelize = require('../config/connection');

// Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Category hasMany Product
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Product belongToMany Tag 
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});
// Tag belongToMany Product 
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};