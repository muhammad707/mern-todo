const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String
  },
  todos: [{
    type: Types.ObjectId,
    ref: 'Todo'
  }]
})

module.exports = {
  UserModel: model('User', schema)
}