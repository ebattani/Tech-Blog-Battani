const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require("./api")
const dashboardRoutes = require('./dashboard-routes.js');


router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);



module.exports = router;