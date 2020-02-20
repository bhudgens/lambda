exports.handler = function(event) {
  const promise = new Promise(function(resolve) {
    resolve(200);
  });
  return promise;
};
