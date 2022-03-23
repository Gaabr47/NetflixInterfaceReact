import { useContext } from "react"
import Logo from "../../Components/Logo"
import { AuthContext } from "../../Context/Auth"
import { BoxInput } from "./style"
export default function Register(){
    const {name,email,password,handleRegister} = useContext(AuthContext)

    return(
       <BoxInput>
           <Logo />
           <form onSubmit={handleRegister} method="post">
               <input placeholder="Digite aqui o seu nome" ref={name} type="text" name="name" /><br/>
               <input ref={email}  placeholder="Digite aqui o seu email " type="email" name="email" /><br/>
               <input ref={password} placeholder="Digite a sua senha " type="password" name="password" /><br/>
               <button>Cadastrar</button>
           </form>
       </BoxInput>
    )
}