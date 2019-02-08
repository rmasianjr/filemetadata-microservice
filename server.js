const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: 'no file uploaded' });
  }

  const { originalname, mimetype, size } = req.file;

  res.send({ name: originalname, type: mimetype, size });
});

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err.messsage, err);

  res
    .status(err.status || 500)
    .send({ error: err.message || 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
