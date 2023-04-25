const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(category);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {

    const category = await Category.create(req.body);
    res.status(201).json(category);

  } catch (err) {
    // handle any errors
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id, 
        },
      }
    );
    res.status(200).json(updatedCategory);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    await category.destroy();
    res.status(200).json({ message: 'Category deleted successfully' });

  } catch (err) {
    // handle any errors
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
