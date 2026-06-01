const errorHandler = (err, req, res, next) => {
    console.error('Ошибка:', err);
  
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Ошибка валидации',
        details: err.errors.map(e => ({ field: e.path, message: e.message }))
      });
    }
  
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({
        error: 'Дублирование данных',
        details: err.errors.map(e => ({ field: e.path, message: e.message }))
      });
    }
  
    if (err.statusCode) {
      return res.status(err.statusCode).json({ error: err.message });
    }
  
    res.status(500).json({ 
      error: 'Внутренняя ошибка сервера',
      message: err.message
    });
  };
  
  module.exports = errorHandler;