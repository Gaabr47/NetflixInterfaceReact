import styled from "styled-components";

export const Box = styled.div`
max-width:23em;
height:60vh;
background:rgba(0,0,0,0.8);
margin:0 auto;
border-radius:10px;
padding:20px;

h1{
    color:#fff;
}

input,button{

    width:90%;
    padding:1.25rem 0.8rem;
    margin-bottom:20px;
    border-radius:5px;
    border:none;
    outline:none;

}

button {
    width:97%;
    margin-top:20px;
  font-weight:bold;
    background:#E50914;
}

p {
    color:#dcdcdc;
    font-size:1rem;
}
span {
    font-size:12px;
    display:flex;
    justify-content:space-between;
}
b,button,label {
    color:#fff;
}
`