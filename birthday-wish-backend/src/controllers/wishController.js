const Wish = require('../models/Wish');
const crypto = require('crypto');

exports.createWish = async (req, res) => {
  try {
    const { name, dateOfBirth, imageUrl } = req.body;

    // Generate a unique wishUrl
    const uniqueId = crypto.randomBytes(8).toString('hex');
    const wishUrl = `${process.env.FRONTEND_URL}/happy-birthday/${uniqueId}`;

    const wish = new Wish({
      name,
      dateOfBirth,
      imageUrl,
      wishUrl,
    });

    await wish.save();

    res.status(201).json({ success: true, data: wish });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getWishByUrl = async (req, res) => {
  try {
    const { wishUrl } = req.params;
    const wish = await Wish.findOne({ wishUrl: `${process.env.FRONTEND_URL}/happy-birthday/${wishUrl}` });

    if (!wish) {
      return res.status(404).json({ success: false, error: 'Wish not found' });
    }

    res.status(200).json({ success: true, data: wish });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};