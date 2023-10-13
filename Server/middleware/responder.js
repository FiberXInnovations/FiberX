const responder = (req, res, next) => {
    res.errResponse =  (code = 500, msg = 'An error occured', data = []) => {
      res.status(code).json({ status: 'error', msg: msg, data });
    };
  
    res.successResponse = (code=200, msg = 'Operation Successful', data=[])=> {
      res.status(code).json({ status: 'success', msg: msg, data});
    };

    res.infoResponse = (code=200, msg = 'Operation Information', data=[])=> {
      res.status(code).json({ status: 'info', msg: msg, data});
    };
  
    next();
};
  
module.exports = responder;