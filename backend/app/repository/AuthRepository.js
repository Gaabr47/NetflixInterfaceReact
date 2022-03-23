const db = require('../../database');
const bcrypt = require('bcrypt');
class AuthRepository {
    async findAll(){
        const rows = await db.query('SELECT * from users' )

        return rows
    }
    async findEmail(request){
        const [row] = await db.query('SELECT email from users WHERE email = $1',[request.body.email])

        return row
    }
   async findByCreateUser(request){
        const {name,email,password} = request.body
        const hashedPassword = await bcrypt.hash(password,10)
        const row = await db.query(`
        INSERT INTO users(name,email,password)
        VALUES($1,$2,$3)
        RETURNING *
        `,[name,email,hashedPassword]);
    
        return row;
       
    }

    async findByLogin(request,response) {
        const {email,password} = request.body

        const row = await db.query('SELECT * from users WHERE  email = $1',[email]); 
        const user = row.find(user => user.email === email);

        if(await bcrypt.compare(password, user.password)){
            response.status(200).send(user)
        }else {
            response.status(500)
     
        };


    }
}

module.exports = new AuthRepository();