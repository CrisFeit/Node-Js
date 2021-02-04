const { RESTDataSource } = require('apollo-datasource-rest')

class UserAPI extends RESTDataSource {
    constructor(){
        super()
        this.baseURL = 'http://localhost:3000/'
    }
    async getUsers(){
        const users = await this.get('/users')
        return users.map(async user => {
            return {
                id: user.id,
                nome: user.nome,
                email: user.email,
                ativo: user.ativo,
                role: await this.get(`/roles/${user.role}`)
            }
        })
    }
    async getUserById(id){
        const user = await this.get(`/users/${id}`)
        user.role = await this.get(`/roles/${user.role}`)
        return user
    }

    async adicionaUser(user){
        return ({
            nome: user.nome,
            ativo: user.ativo,
            email: user.email,
            role: {
                id : 1,
                type: user.role
            }
        })
    }
}

module.exports = UserAPI