const { response } = require('express');
const AuthRepository = require('../repository/AuthRepository')

class AuthController {
  async  index(request,response){
    const users = await AuthRepository.findAll();

    return response.json(users)
}
   async create(request,response){

        const findEmail = await AuthRepository.findEmail(request);

        if(findEmail){
          return console.log('Este email ja existe')
        }
        const NewUser = await AuthRepository.findByCreateUser(request);

        return response.json(NewUser);
    }
    async show(request,response){
        const login = await AuthRepository.findByLogin(request,response);

        return response.json(login)
    };
    delete(){};

};

module.exports = new AuthController();