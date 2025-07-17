const express = require('express');
const cors = require('cors');
const path = require('path');
const messageRoutes = require('./routes/messageRoutes');
const errorHandler = require('./middleware/errorHandler');
const messageController = require('./controllers/messageController');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/api/messages', messageRoutes);
app.get('/api/message', messageController.getMessage);
app.post('/api/message', messageController.postMessage);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/postpage', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'post.html'));
});

app.use(errorHandler);

module.exports = app;
