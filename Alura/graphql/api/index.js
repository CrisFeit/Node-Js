const { ApolloServer } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')
const  userResolvers = require('../api/user/resolvers/userResolvers')
const UserAPI = require('./user/datasouce/user')

const typeDefs = [userSchema]
const resolvers = [ userResolvers]

const server = new ApolloServer( 
  { 
    typeDefs, 
    resolvers,
    dataSources: ()=> {
      return {
        usersAPI: new UserAPI()
      }
    }
  } )

server.listen().then(({url})=> {
  console.log(`Servidor Rodando na porta ${url}`);
})