const { Router } = require('express');
const { check } = require('express-validator');


const { getUsers, postUsers, patchUsers, deleteUsers, putUsers } = require('../controllers/users');
const { fieldValidation } = require('../middlewares/fields-validation');
const { isRolValid } = require('../helpers/db-validators');


const router = Router();

router.get('/', [
    // Middleware
], getUsers);

router.post('/', [
    //Middleware
    check('name', 'Name is Obligatory').not().isEmpty(),
    check('password', 'Password is Obligatory and more than 6 characters').isLength({ min: 6 }),
    check('email', 'Not Available email').isEmail(),
    //check('role').custom(isRolValid),
    fieldValidation
], postUsers);

router.put('/:id', putUsers);

router.patch('/', patchUsers);

router.delete('/', deleteUsers);


module.exports = router;