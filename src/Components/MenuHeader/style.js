import styled from "styled-components";

export const Menu = styled.ul`

display:flex;
list-style-type:none;

li {
    margin-left:10px;
    font-size:14px;
}
li a{
    text-decoration:none;
    color:#fff;
}

@media(max-width:768px) {
    display:none;
}
`