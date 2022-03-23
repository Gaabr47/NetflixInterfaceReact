import styled from "styled-components";
export const ListArea = styled.div`
:hover .leftArrow,
:hover .rightArrow {
    opacity:1;
    transition:0.5s;
    
}
`
export const Bullets = styled.div`

.leftArrow,.rightArrow{
    transition:0.5s;
    align-items:center;
    display:flex;
    position:absolute;
    height:250px;
    width:20px;
    padding:0 20px;
    background:rgba(0,0,0,0.5);
    cursor:pointer;
    opacity:0;
}
.leftArrow{
    left:2rem;
   }

.rightArrow{
 right:1rem;
    
}
@media(max-width:768px){
    display:none;
}


`
export const CarrouselItem = styled.div`
display:flex;

@media(max-width:768px){
    padding:2rem;
    max-width:100%;
    overflow-x:auto;
     scrollbar-color: #06c;

     ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
}


`
export const TitleH1 = styled.h1 `
color:#fff;
font-size:2rem;

@media(max-width:768px){
    font-size:1rem;
    margin-bottom:-20px;
}
`
export const Poster = styled.img`
height:250px;
margin-left:5px;
cursor:pointer;
transition:0.2s;

:hover {
    transform:scale(1.1);
    transition:0.2s;
}

@media(max-width:768px){
    height:200px;
}
`