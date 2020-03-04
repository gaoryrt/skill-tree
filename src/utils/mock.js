const Mock = require('mockjs')
const hashArr = [
  {
    api: /api\/latest/,
    data: {
      'age|10-20': 1
    }
  }
  // http://mockjs.com/examples.html
]
hashArr.forEach(({ api, data }) => Mock.mock(api, data))
