const Items = require('../models/Items');
const Category = require('../models/Category');
const { v4: uuid } = require('uuid');

const services = {
  addItem: async ({ name, categoryId, categoryName, note, imageUrl }) => {
    console.log(imageUrl);
    try {
      if (categoryId) {
        const category = await Category.findOne({ categoryId: categoryId });
        if (!category) {
          throw {
            code: 404,
            message: 'Category not found',
          };
        } else {
          const item = await Items.create({
            itemId: uuid(),
            itemName: name,
            categoryId,
            categoryName,
            note,
            imageUrl,
          });
          if (item) {
            const updateCategoryLength = await Category.updateOne(
              { categoryId: category.categoryId },
              { itemsLength: category.itemsLength + 1 }
            );
            if (updateCategoryLength) {
              return {
                code: 201,
                message: 'Item created',
                data: {
                  itemId: item.itemId,
                },
              };
            } else {
              throw {
                code: 500,
                message: 'Failed to update category',
              };
            }
          } else {
            throw {
              code: 500,
              message: 'Failed to create item',
            };
          }
        }
      } else {
        const newCategory = await Category.create({
          categoryId: uuid(),
          categoryName,
          itemsLength: 1,
        });
        if (newCategory) {
          const newItem = await Items.create({
            itemId: uuid(),
            itemName: name,
            categoryId: newCategory.categoryId,
            categoryName: newCategory.categoryName,
            note,
            imageUrl,
          });
          if (newItem) {
            return {
              code: 201,
              message: 'Item created',
              data: {
                itemId: newItem.itemId,
              },
            };
          } else {
            throw {
              code: 500,
              message: 'Failed to add new item',
            };
          }
        } else {
          throw {
            code: 500,
            message: 'Failed to add new category',
          };
        }
      }
    } catch (error) {
      return error;
    }
  },
};

module.exports = services;
