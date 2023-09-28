const Role = require('../models/role');

const isRolValid = async (rol = '') => {
    const rolExist = await Role.FindOne({ rol });
    if (!rolExist) {
        throw new Error('Rol is not in the Database');
    }
}

module.exports = {
    isRolValid
}