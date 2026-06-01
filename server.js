const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const { sequelize } = require('./models');
const errorHandler = require('./middleware/errorHandler');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3399;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.get('/', (req, res) => {
    res.json({
        message: 'Добро пожаловать в API автосалона!',
        version: '1.0.0',
        endpoints: {
            cars: 'http://localhost:3000/api/cars',
            customers: 'http://localhost:3000/api/customers',
            employees: 'http://localhost:3000/api/employees',
            sales: 'http://localhost:3000/api/sales',
            testDrives: 'http://localhost:3000/api/test-drives'
        }
    });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});

app.use((req, res) => {
    res.status(404).json({ error: `${req.method} ${req.url} не найден` });
});

app.use(errorHandler);

async function start() {
    try {
        await sequelize.authenticate();
        console.log('База данных подключена успешно');
        
        await sequelize.sync({ alter: true });
        console.log(' Модели синхронизированы с базой данных');
        
        app.listen(PORT, () => {
            console.log(`\nСервер запущен: http://localhost:${PORT}`);
            console.log(`API доступно: http://localhost:${PORT}/api`);
            console.log(` Health check: http://localhost:${PORT}/api/health`);
        });
    } catch (error) {
        console.error('Ошибка запуска сервера:', error);
        process.exit(1);
    }
}

start();

module.exports = app;