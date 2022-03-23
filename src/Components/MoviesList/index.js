import { useContext,useState } from "react"
import { MovieContext } from "../../Context/Movies"

import Carrousel from "./Carrousel"
export default function MovieList(){
    const {movies} = useContext(MovieContext)
    

   
    return(
        <>
        
        {movies.map((item)=>{
       
            return(
             <Carrousel title={item.title} items={item.request} />
            )
        })}
        </>
    )
}