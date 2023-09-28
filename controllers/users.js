const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user')

const getUsers = (req = request, res = response) => {
    const { name = 'No name', age, page = 1, limit = 10 } = req.query

    res.status(200).json({
        ok: true,
        msg: 'Get api - Controller'
    })
}

const postUsers = async (req = request, res = response) => {

    //Deconstruction of the request Body
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // Email Validation
    // const emailExists = await User.findOne({ email });
    // if (emailExists) {
    //     return res.status(400).json('E-mail already registered');
    // };

    //Encrypt Password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    //Save to db
    //await user.save()

    res.status(200).json({
        user
    });
}

const putUsers = (req = request, res = response) => {
    const { id } = req.params

    res.status(200).json({
        ok: true,
        msg: 'Put api - Controller',
        id
    })
}

const patchUsers = (req = request, res = response) => {
    //req.

    res.status(200).json({
        ok: true,
        msg: 'Patch api - Controller'
    })
}

const deleteUsers = (req = request, res = response) => {
    const param = req.query

    res.status(200).json({
        ok: true,
        msg: 'Delete api - Controller',
        param
    })
}


module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers
};