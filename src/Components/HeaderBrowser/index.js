import { HeaderBg,Title,Sinopse } from "./style"
import { useContext, useState } from "react"
import { MovieContext } from "../../Context/Movies"
import { ContentFull } from "../Container/style"

export default function HeaderBrowser(){
    const [background,setBackground] = useState({})
    const {movies} = useContext(MovieContext)
    
    
    const number = Math.floor(Math.random()*10)
    console.log(movies[0]?.request.results[number])
    const Popular = movies[0]?.request.results[number]
    return(

<div>        <HeaderBg src={`https://image.tmdb.org/t/p/original${Popular?.backdrop_path}`} />
<ContentFull>
<Title>{Popular?.title}</Title>
<Sinopse>{Popular?.overview}</Sinopse>
</ContentFull>
        </div>

    )
}