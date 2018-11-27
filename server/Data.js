const config = require('./config');

class Data {
  constructor(url = `http://localhost:${config.port}${config.staticDir}`) {
    this.url = url;
    this.data = [
      {
        name: 'du[a'
      },
      {
        name: "dupa"
      }
    ];
    this.dataList = this.generateData();
  }
  generateData() {
    return this.data.map(element => {
      return element.name
    })
  };
}

module.exports = Data;