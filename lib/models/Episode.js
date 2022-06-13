const pool = require('../utils/pool');
const { Quote } = require('./Quote');

class Episode {
  id;
  title;
  season;
  number;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.number = row.number;
    this.season = row.season;
    this.quotes =
      row.quotes.length > 0 ? row.quotes.map((quote) => new Quote(quote)) : [];
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM episodes');
    return rows.map((item) => new Episode(item));
    // const { rows } = await pool.query('SELECT * FROM quotes');
    // return rows.map((test) => new Quote(test));
    // implement getAll() method to return a list of Episodes with quotes
  }
}

module.exports = { Episode };
