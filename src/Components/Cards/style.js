import styled from "styled-components";

export const Card = styled.div`
display:flex;
justify-content:space-between;
alignItems:center;
max-width:1000px;
margin:0 auto;



h1,h3 {
    color:#fff;
  
  
}


h1{
    font-size:3.5rem;
}
h3{
    font-size:1.6rem;
    font-weight:0;
}

@media(max-width:768px){
    display:block;

    h1,h3{
    font-size:1rem;
    }

  
}
`

export const ContainerCards = styled.div`

img {
    height:20rem;
}
@media(max-width:768px){
    width:100%;

    
  
    img{
        height:13rem;
        margin:0 auto;
        width:15rem;
    }
    
}

`

export const BackgroundCards = styled.div`
height:auto;
padding:5rem;
border-top:8px #222222 solid;

@media(max-width:768px){
    padding:1rem;
    text-align:center;
}
`