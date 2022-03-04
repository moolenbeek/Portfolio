module.exports = (db) => {

  const getInfo = () => {
    const query = {
      text: 'SELECT * FROM info'
    }
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }

  return {
    getInfo
  }
}