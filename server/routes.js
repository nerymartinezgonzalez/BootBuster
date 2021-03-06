exports.getAllAddress = (request, response) => {
  db.getAllAddresses(data => {
    response
      .status(200)
      .send(data)
      .end();
  });
};

exports.addAddress = (request, response) => {
  const { address } = request.body;
  db.postAdress(address, res => {
    response
      .status(200)
      .send(res)
      .end();
  });
};
