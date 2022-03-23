import { Box } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth";
export default function BoxLogin(){
    const {handleLogin,email,password} = useContext(AuthContext)
    return(
        <Box>
            <h1>Entrar</h1>
            <form method="post" onSubmit={handleLogin}>
          <input placeholder="Email ou número de telefone" ref={email} name="email" type="text" /><br/>
          <input placeholder="Senha" name="password" ref={password} type="password" /><br/>
          <button type="submit" >Entrar</button>
          </form>
          <span><label>Lembre-se de mim</label><label>Precisa de ajuda?</label></span>
          <p>Conectar com o facebook</p>
          <p>Novo por aqui? <b>Assine agora.</b></p>
          <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</p>
    
        </Box>
    )
}