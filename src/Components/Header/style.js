import styled from "styled-components";

export const HeaderBg = styled.header`

background-image:linear-gradient(rgba(0,0,0,0.3) 70%,black 90%),  url(https://i.pinimg.com/originals/2f/88/a9/2f88a9427474343f7275e3b8f6fcc2e1.jpg) ;
height:70vh;
width:100vw;

background-size:cover;

`

export const ContainerHeader = styled.div`

max-width:95%;
margin:0 auto;
padding:20px;
`

export const RightItemsHeader = styled.span `

select{
    background:rgba(0,0,0,0.5);
    color:#fff;
    border:1px solid #fff;
    margin-right:1rem;
    border-radius:3px;
    outline:none;
    padding:0.3rem 1rem;
}

button {
    background:#E50914;
    padding:0.4rem 1.0em;
    border:none;
   
    border-radius:5px;

}
button a{
    color:#fff;
    text-decoration:none;
}

`