const db = require('../utils/databaseUtil')
// db.execute('SELECT * FROM homes')
//   .then(([rows, fields]) => console.log('Getting From DB', rows))
//   .catch(error => {
//     console.log('Error While Creating Home Record ', error)
//   })

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, id) {
    this.houseName = houseName
    this.price = price
    this.location = location
    this.rating = rating
    this.photoUrl = photoUrl
    this.description = description
    this.id = id
  }

  save() {
    // console.log("Hey I am in Database",this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description, this.id)
    if(this.id){
      return db.execute(`UPDATE homes
        SET houseName = ?,
            price = ?,
            location = ?,
            rating = ?,
            photoUrl = ?,
            description = ?
        WHERE id = ?`,
        [this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description, this.id]
      )
    }else{
      return db.execute(`INSERT INTO homes (houseName, price, location, rating, photoUrl, description)
      VALUES (?, ?, ?, ?, ?, ?)`, [this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description])
    }
  }

  static fetchAll() {
    return db.execute('SELECT * FROM homes')
  }

  static fetchById(homeId) {
    return db.execute(`SELECT * FROM homes WHERE id=?`,[homeId])
  }

  static deleteById(homeId) {
    return db.execute(`DELETE FROM homes WHERE id=?`,[homeId])
  }
}
