const orm = require('../config/orm.js');

module.exports = {
    getburgers: () => orm.selectAll('burgers'),
    // createburger: (data) => orm.insertOne('burgers', data),
    // updateburger: (id, data) => orm.updateOne('burgers', id, data),
}