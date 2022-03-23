import { Menu } from "./style";
import { Link } from "react-router-dom";
export default function MenuHeader(){
    return(
        <Menu>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/">Séries</Link></li>
            <li><Link to="/">Filmes</Link></li>
            <li><Link to="/">Bombando</Link></li>
            <li><Link to="/">Minha lista</Link></li>
        </Menu>
    )
}