import { RightItemsHeader } from "../style";
import { Nav } from "./style";
import { Link } from "react-router-dom";
import Logo from "../../Logo";
export default function NavigationHeader(){
    return(
   <Nav>
     <Logo />

      <RightItemsHeader>
          <select>
              
            <option>Portugues</option>
            <option>English</option>
          </select>

          <button><Link to="/br/login">Entrar</Link></button>
      </RightItemsHeader>
      </Nav>
    )
}