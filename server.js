const http = require('http')
const express = require('express')
const cors = require('cors')                       
const sequelize = require('./dbserver')
const router = require('./routes')

const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)

app.get('/', (req, res) => {
    res.json({
        message: 'Добро пожаловать в API автосалона!',
        endpoints: {
            cars: 'http://localhost:3000/cars',
            customers: 'http://localhost:3000/customers',
            employees: 'http://localhost:3000/employees',
            sales: 'http://localhost:3000/sales',
            testdrives: 'http://localhost:3000/testdrives'
        }
    });
});

async function start() {
  try {
    await sequelize.authenticate()
    console.log('База данных подключена')
    await sequelize.sync({ alter: true })
    console.log('Синхронизация завершена')
    
    http.createServer(app).listen(port, () => {
      console.info(`Server running on port ${port}`)
      console.log('\n Доступные маршруты:')
      console.log('  GET    /cars')
      console.log('  GET    /cars/:id')
      console.log('  POST   /cars')
      console.log('  PATCH  /cars/:id')
      console.log('  DELETE /cars/:id')
      console.log('  GET    /customers')
      console.log('  GET    /employees')
      console.log('  GET    /sales')
      console.log('  GET    /testdrives\n')
    })
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

start()