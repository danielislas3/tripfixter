const router = require('express').Router();
const {downloadCv} = require('../controllers/cvController')


router.get('/cv',downloadCv)

module.exports = router;
