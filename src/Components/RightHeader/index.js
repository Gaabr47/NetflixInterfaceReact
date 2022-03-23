import {IoMdSearch} from 'react-icons/io'
import {FaBell} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'
import { ItemsRight } from './style'
export default function RightHeader(){
    return(
        <ItemsRight>
        <IoMdSearch size={35} color="#fff" style={{marginTop:"-5"}}/>
        <p style={{margin:'0 20px'}}>Infantil</p>
        <FaBell size={25} style={{marginRight:'10px'}} />

        <ImUsers size={20} style={{background:"#2077E7", padding:5, borderRadius:'5px'}}/>
        </ItemsRight>
    )
}