const errorHandler = (err, _req, res, next) => {    
    console.log(`Error message: ${err.message}`);
    console.log(`Error stack: ${err.stack}`);

    res.status(500);
    res.json({
        message: err.message,
        severity: 'error'
    });

    next();
}
  
module.exports = errorHandler;