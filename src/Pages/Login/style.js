import styled from "styled-components";

export const Bg = styled.div`
background-image: url(https://i.pinimg.com/originals/2f/88/a9/2f88a9427474343f7275e3b8f6fcc2e1.jpg) ;
height:100%;
width:100vw;
padding-top:10px;

background-size:cover;

@media(max-width:768px){
    background:#000;
 
    img {
        height:3rem;
    }
}
`

export const FooterLogin = styled.footer`

background:rgba(0,0,0,0.8);
height:20rem;
width:100%;

`
export const ContainerFooterLogin = styled.div`
max-width:1000px;
margin:0 auto;
padding:20px;
color:#fff;
text-align:left;

ul{
    
    list-style-type:none;
    flex-wrap: wrap;
    flex-direction: row; 
    display:flex;
}
li {
    font-size:12px;
    margin-right:5rem;
    text-align:left;
    line-height:2rem;
}
`