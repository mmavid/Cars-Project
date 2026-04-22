const http = require('http');
const express = require('express');
const cors = require('cors');
const sequelize = require('./dbserver');
const router = require('./routes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

async function start() {
  try {
    await sequelize.authenticate();
    console.log('База данных подключена');
    await sequelize.sync({ alter: true });
    console.log('Синхронизация завершена');
    
    http.createServer(app).listen(port, () => {
      console.info(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

start();