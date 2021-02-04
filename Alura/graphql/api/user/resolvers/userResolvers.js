
const userResolvers = {
    Query: {
        users: (root, args, { dataSources }, info )=> dataSources.usersAPI.getUsers(),
        user: (root,{ id },{ dataSources})=> dataSources.usersAPI.getUserById(id)
    },
    Mutation: {
        adicionaUser: (root, user , { dataSources })=> dataSources.usersAPI.adicionaUser(user)
    }
}

module.exports =  userResolvers