require('dotenv').config();
const mongoose = require('mongoose');

class ConnectDB {
  static async connect() {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  }
}

module.exports = ConnectDB;