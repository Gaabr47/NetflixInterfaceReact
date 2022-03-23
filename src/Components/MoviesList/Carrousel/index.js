import { TitleH1,Poster,CarrouselItem,Bullets,ListArea} from "./style"
import { useState } from "react"
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'
export default function Carrousel({title,items}){

    const[scrollX,setScrollX] = useState(-50)

    const handleScrolllRight = () =>{
        const scroll = scrollX - 400

        if(scrollX < -1800) {
            return setScrollX(-50)
        } 

        setScrollX(scroll)
    }
    const handleScrolllLeft = () =>{
        const scroll = scrollX + 400

        if(scrollX < 2000) {
            return setScrollX(-50)
        } 

        setScrollX(scroll)
    }
    return(

        <ListArea>        <TitleH1>{title}</TitleH1>
          
          <Bullets>
        <div className="leftArrow" onClick={handleScrolllLeft}><BsArrowLeft color="#fff" size={35} /></div>

            <div className="rightArrow" onClick={handleScrolllRight}><BsArrowRight color="#fff" size={35} /></div>
        </Bullets>
        <CarrouselItem 
        
        

        style={{
            transition:'0.5s',
            marginLeft:scrollX}}
            
            
            >
           


            {items.results.map((items)=>{
                return(
                    <Poster src={`https://image.tmdb.org/t/p/original${items.poster_path}`} />
                )
            })}
        </CarrouselItem>
        </ListArea>

    )
}