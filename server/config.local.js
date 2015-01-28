module.exports = {
  host: process.env.VCAP_APP_HOST||'localhost',
  port: process.env.VCAP_APP_PORT||3000
};
