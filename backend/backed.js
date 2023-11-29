const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/assignmet-connection', {});

const db = mongoose.connection;
db.on('error', console.error, 'MongoDB connection error:');
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const formDataSchema = new mongoose.Schema({
  name: String,
  age: String,
  email: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const data = await FormData.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.send(' Error');
  }
});

app.post('/form', async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const formData = new FormData({ name, age, email });
    await formData.save();

    res.send('Form data saved to MongoDB');
  } catch (error) {
    console.error(error);
    res.send(' Error');
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
