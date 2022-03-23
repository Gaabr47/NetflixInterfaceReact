import BoxLogin from "../../Components/BoxLogin";
import { ContentFull } from "../../Components/Container/style";
import Logo from "../../Components/Logo";
import { Bg, ContainerFooterLogin, FooterLogin } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth";
import { Navigate } from "react-router-dom";
export default function Login(){
    const {autenticate}  = useContext(AuthContext)
    return(
      !autenticate ? 
<Bg>
     <ContentFull>
     <Logo />
     <BoxLogin></BoxLogin>
     </ContentFull>

     <FooterLogin>
         <ContainerFooterLogin>
             <p>Dúvidas? Ligue 0800-761-4631</p>
                     <ul>
            <li>Perguntas frequentes</li>
            <li>Centro de ajuda</li>
            <li>Termos de uso</li>
            <li>Privacidade</li>
            <li>Preferências de cookies</li>
            <li>Informações corporativas</li>
        </ul>
        </ContainerFooterLogin>

     </FooterLogin>
     </Bg> : <Navigate to="/browse" />
   
    )
}