const mongoose = require('mongoose');

exports.mongo = mongoose.connect('mongodb+srv://admin:admin@cluster0.tscfw0p.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log("DB is connected");
}).catch((err) => {
    console.log("MongoDB connection error",err);
})
