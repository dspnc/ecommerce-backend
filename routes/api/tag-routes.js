const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    // find the tag by its id and include its associated Product data
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    // return the tag as a JSON response
    res.json(tag);
  } catch (err) {
    // handle any errors
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    // Create a new tag
    const tag = await Tag.create(req.body);

    // Send the new tag as a response
    res.status(201).json(tag);
  } catch (err) {
    // Handle any errors
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    // Find the tag by its id
    const tag = await Tag.findByPk(req.params.id);

    // Update the tag's name
    tag.tag_name = req.body.tag_name;

    // Save the changes to the database
    await tag.save();

    // Send the updated tag as a response
    res.status(200).json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    // find the tag to delete
    const tag = await Tag.findByPk(req.params.id);

    // if tag not found, return 404 response
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    // delete the tag
    await tag.destroy();
    // return success response
    res.status(204).json({ message: 'Tag deleted' });

  } catch (err) {
    // handle errors
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
