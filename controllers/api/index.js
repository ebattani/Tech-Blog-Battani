const postRoutes = require('./postRoutes');
const comRoute = require('./comRoute');
const router = require('express').Router();
const userRoutes = require('./userRoutes.js');


router.use('/user', userRoutes);

router.use('/post', postRoutes);

router.use('/comment', comRoute);

module.exports = router;