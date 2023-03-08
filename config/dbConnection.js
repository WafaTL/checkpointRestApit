const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const connectDB=()=>{
    try {
const conn = mongoose.connect(process.env.MONGO_URI, {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
  });
  console.log(`MongoDB Connected:`.magenta.underline);

}catch (err)
{
    console.error('Could not connect to MongoDB', err);
}
}
  module.exports = connectDB;