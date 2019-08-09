var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create Schema  创建数据库字段，之后会自动生成数据库。
var userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    avatar: {
        type: String
    },
    identity: {
        type: String
    },
    date: {
        type: Date,
        default:Date.now
    },
});
// 将数据模型暴露出去
module.exports = User = mongoose.model('users', userSchema);