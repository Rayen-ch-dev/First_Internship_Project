const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'admin'
    },
    lastLogin: { 
        type: Date, 
        default: null 
    },
    lastActivity: { 
        type: Date, 
        default: null 
    }
});

module.exports = mongoose.model('admins', AdminSchema);
