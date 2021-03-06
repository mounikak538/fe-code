// Use CommonJS require below so we can dynamically import during build-time.

/**  @description condition which decides store function */
if (process.env.NODE_ENV === "production") {
  module.exports = require("./store/configureStore.prod");
} else {
  module.exports = require("./store/configureStore.dev");
}
