function sumRequestHandler(req, res){
  console.log('This is Separate Module', req.url)
}

exports.sumRequestHandler = sumRequestHandler;
