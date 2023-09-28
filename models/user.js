const { Schema, model } = require('mongoose')

const userSchema = Schema({

    name: {
        type: String,
        required: [true, 'Insert the name']
    },

    email: {
        type: String,
        required: [true, 'Insert the email'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'Insert the password']
    },

    img: {
        type: String
    },

    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },

    state: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    }
});

module.exports = model('User', userSchema)