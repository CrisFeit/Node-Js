class livroDao {

  constructor(db){
    this._db = db;
  }

  adiciona(livro) {
    return new Promise((resolve,reject) => {
      this._db.run(`
          INSERT INTO livros(
              titulo,
              preco,
              descricao
          ) values(?,?,?)
          `,
          [
            livro.titulo,
            livro.preco,
            livro.descricao
          ],
          function(err){
            if(err){
              console.log(err);
              return reject('não foi possível adicionar o livro!');
            }
            resolve();
          }
      )
    })
  }

  pegar(id){
    return new Promise((resolve,reject) => {
      this._db.all(`SELECT * FROM  livros WHERE id = ${id}`,(err,res) => {
        if(err){
          return reject('não foi possível pegar o livro!')
        }
        return resolve(res)
      })
    })
  }

  listar(){
    return new Promise((resolve,reject) => {
      this._db.all('SELECT * FROM  livros',(err,res) => {
        if(err){
          return reject('não foi possível listar os livros!')
        }
        return resolve(res)
      })
    })
  }
}

module.exports = livroDao;