import styled from "styled-components";

export const EmailForm = styled.form `
margin:0px auto;


input{
    padding:1.5rem 0.5rem;
    width:25rem;
    outline:none;
    border:none;
    margin-bottom:20px;
}
button {
    padding:1.5rem 3rem;
    background:${props=>props.theme.PrimaryColor};
    border:none;
    color:#fff;
    cursor:pointer;

}

@media(max-width:768px){
input{
    max-width:90%;
    padding:1rem 0.5rem;
}
button{
    padding:0.5rem 2rem;
    border-radius:3px;
}
}
`