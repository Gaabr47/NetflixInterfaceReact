import styled from "styled-components";

export const Items = styled.div`
max-width:40rem;
margin:4rem auto;
text-align:center;

h1,p {
    color:#fff;
}
  
h1{
    font-size:3.5rem;
    
}

@media(max-width:768px){
    h1{
    font-size:2rem;
    }
}
`