import { ContentFull } from "../../Components/Container/style";
import MenuHeader from "../../Components/MenuHeader";
import { Navigation} from "./style";
import MovieProvider from "../../Context/Movies";
import MovieList from "../../Components/MoviesList";
import {GiHamburgerMenu} from 'react-icons/gi'
import HeaderBrowser from "../../Components/HeaderBrowser";
import RightHeader from "../../Components/RightHeader";
export default function Browse(){

  

   
    return(

        <MovieProvider>
      
       <Navigation>
           
      <ContentFull 
      style={{display:'flex', 
      justifyContent:'space-between', 
      alignItems:'center'}}>

<span>
          
          
          
        <GiHamburgerMenu  id="toggle" size={30} color="#fff" style={{marginRight:10}}/>
        
          <img 
          style={{
              height:'1.5rem'
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />

          <MenuHeader/>
          </span>

          <input id="search" placeholder="Buscar" type="text" />
          <RightHeader />
      </ContentFull>
      </Navigation>

    
    
    
      <HeaderBrowser />
   

   
<ContentFull style={{marginTop:70}}>
    
      <MovieList/>
      </ContentFull>
      </MovieProvider>
    )
}