let url = require('url')

let request = {
  // get func() 即 调用func时为func，不需func()
  get url () {
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  },
  // ..........
}

module.exports = request