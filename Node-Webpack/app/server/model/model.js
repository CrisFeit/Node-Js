const { readdirSync } = require('fs')
const path = require('path')
const currentDir = path.resolve(process.cwd())

class Model {
  
  movies = [

  ]

  series = [

  ]

  getFoldersNames(folder) {
      let source = path.resolve(currentDir, '..'+folder)
      
      if(source){
        return readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
      }else{
        return false
      }

  }
}

module.exports = Model;