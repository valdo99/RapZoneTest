const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Data = require('./data.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', {
  useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
})

const dataRoutes = express.Router();
dataRoutes.route('/').get(function (req, res) {
  Data.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

dataRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Data.findById(id, function (err, data) {
    res.json(data);
  });
});
dataRoutes.route('/update/:id').post(function (req, res) {
  Data.findById(req.params.id, function (err, data) {
    if (!data)
      res.status(404).send("data is not found");
    else
      data.song_country = req.body.song_country;
    data.song_YTID = req.body.song_YTID;
    data.song_YTUrl = req.body.song_YTUrl;
    data.song_Name = req.body.song_Name;
    data.save().then(data => {
        res.json('song updated!');
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

dataRoutes.route('/add').post(function (req, res) {
  let data = new Data(req.body);
  data.song_country = req.body.song_country;
  data.song_YTID = req.body.song_YTID;
  data.song_YTUrl = req.body.song_YTUrl;
  data.song_Name = req.body.song_Name;
  data.save()
    .then(data => {
      res.status(200).json({
        'song': 'song added successfully'
      });

    })
    .catch(err => {
      res.status(400).send('adding new song failed');
    });
});

app.use('/todos', dataRoutes);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
