var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DepartmentBillabilitySchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    week: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    values: [Schema.Types.Mixed]
});

module.exports = mongoose.model('DepartmentBillability', DepartmentBillabilitySchema);