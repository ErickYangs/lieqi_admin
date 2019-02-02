let Base64 = require("js-base64").Base64;

const common = {
  set_sessionStorage(type, value) {
    sessionStorage.setItem(type, Base64.encode(value));
  },
  get_sessionStorage(type) {
    let value = sessionStorage.getItem(type);
    value = Base64.decode(value);
    return value;
  }
};

export default common;
