exports.handler = async (event, context) => {
  const response = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    isBase64Encoded: false,
    statusCode: 200,
    statusDescription: '200 OK',
  };
  response.body = "{}"
  return response;
};
