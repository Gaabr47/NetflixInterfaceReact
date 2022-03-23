import { createContext, useEffect,useState } from "react"
import  api  from "../../requests"

export const MovieContext = createContext({})
export default function MovieProvider({children}){
  const [movies,setMovies] = useState([])
    useEffect(()=>{

      async function Movie(){

            const id = "fe23e2883b46907fcadb189b39420b26"
          const MovieList = [

            {
                title:"Populares na netflix",
                request: await (await api.get(`movie/popular?api_key=${id}&language=pt-BR`)).data
            },

  
         

            {
                title:"Ação",
                request:  await (await api.get(`discover/movie?api_key=${id}&with_genres=28&language=pt-BR`)).data
            },

            {
                title:"Aventura",
                request:  await (await api.get(`discover/movie?api_key=${id}&with_genres=12&language=pt-BR`)).data
            },

            {
                title:"Comédia",
                request: await (await api.get(`discover/movie?api_key=${id}&with_genres=35&language=pt-BR`)).data
            },
            {
                title:"Para toda a familia",
                request: await (await api.get(`discover/movie?api_key=${id}&with_genres=10751&language=pt-BR`)).data
            },
            {
                title:"Musical",
                request: await (await api.get(`discover/movie?api_key=${id}&with_genres=10402&language=pt-BR`)).data
            },
            {
                title:"Romance",
                request: await (await api.get(`discover/movie?api_key=${id}&with_genres=10749&language=pt-BR`)).data
            },
          ]
        setMovies(MovieList)
        
      }

      Movie()

    
    },[])
   return(
       <MovieContext.Provider value={{movies}}>
           {children}
       </MovieContext.Provider>
   )}