exports.handler = (event, context, callback) => {
    callback(null, "key1 value is " + event.key1);
};
