const apiResponse = (res, httpStatusCode, message, data = {}, status = true, extraData = {}) => {
  return res.status(httpStatusCode).send({
    status: httpStatusCode == 200 ? status : false,
    message: message,
    data: data,
    ...extraData
  });
}

module.exports = {
  apiResponse
}