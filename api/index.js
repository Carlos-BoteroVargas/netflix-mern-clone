const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

const PORT = 8800;

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => console.log('DB Connection succesful'))
.catch(err => console.log(err));

app.use(express.json());

app.use('/api/auth', authRoute);
app.use("/api/users", userRoute);


app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}!`);
})