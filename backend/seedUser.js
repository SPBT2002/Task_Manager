const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const seedUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');

    // Check if user already exists
    const userExists = await User.findOne({ email: 'user@taskflow.com' });
    
    if (userExists) {
      console.log('User already exists!');
      process.exit(0);
    }

    // Create user
    const user = await User.create({
      name: 'Test User',
      email: 'user@taskflow.com',
      password: 'user123',
    });

    console.log('✅ Test user created successfully!');
    console.log('Email: user@taskflow.com');
    console.log('Password: user123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

seedUser();
