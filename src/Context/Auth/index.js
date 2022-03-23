import { createContext, useRef,useState } from "react";
import { AuthUsersApi } from "../../requests";
import { ToastContainer, toast } from 'react-toastify'
import { Navigate } from "react-router-dom";
export const AuthContext = createContext({})


export default function AuthProvider({children}){
    const [autenticate,setAutenticate] = useState(localStorage.getItem('userid'))
    const name = useRef('');
    const email=useRef('');
    const password=useRef('');

 async function handleRegister(e){
            e.preventDefault();

            const users = await (await AuthUsersApi.get('/users')).data;
            const AuthEmail = users.find((item)=> item.email == email.current.value);

            if(name.current.value == '' || email.current.value == '' || password.current == '') {
                return toast.error('Preencha corretamente todos os campos')
            }
            if(AuthEmail){
               return toast.error('Este email já existe')
            };

            AuthUsersApi.post('/users/',{
            name:name.current.value,
            email:email.current.value,
            password:password.current.value
        });

        toast.success('Cadastro efetuado com sucesso')
    };

    async function handleLogin(e){
        e.preventDefault()
     
        AuthUsersApi.post('/users/login',{
            email:email.current.value,
            password:password.current.value
        })
        .then(async (response)=>{
            if(response.status == 200){
               const user = await (await AuthUsersApi.get('/users')).data
               const filterUser = user.find((item)=> item.email == email.current.value)
              
               localStorage.setItem('userid', JSON.stringify(filterUser.id));
            window.location.reload()
              
              
            }
        })
        .catch(()=>{
        
                toast.error('Houve algum erro no meio do caminho :(')
          
        })
        
    }
    return(
        <AuthContext.Provider value={{name,email,password,handleRegister, handleLogin,autenticate}} >

            {children}
        </AuthContext.Provider>
    );
};