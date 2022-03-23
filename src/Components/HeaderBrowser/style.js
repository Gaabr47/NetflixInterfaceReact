import styled from "styled-components";


export const HeaderBg = styled.img`
position:absolute;
height:100%;
top:0;
z-index:-50;
width:100%;

@media(max-width:768px){
    display:none;
}
`
export const Title = styled.h1`
color:#fff;
text-transform:uppercase;
font-size:3rem;
text-align:left;
padding-top:10rem;
max-width:50rem;
margin-bottom:-20px;

@media(max-width:768px){
    display:none;
}

`

export const Sinopse = styled.p`
max-width:50rem;
font-size:1rem;
padding-bottom:10rem;
color:#fff;

@media(max-width:768px){
    display:none;
}
`
