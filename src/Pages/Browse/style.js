import styled from "styled-components";


export const Navigation = styled.div`
height:5rem;
width:100%;
top:0;
position:fixed;

span{
    display:flex;
    align-items:center;
}
#toggle,#search {
    display:none;
}
@media(max-width:768px){
    #toggle,#search {
        display:block;
    }
}
#search {
    padding:5px 4px;
    background:#222D32;
    border:1px solid #c1c1c1;
}
`
export const Container = styled.div`

max-width:1000px;
margin:10rem auto;
text-align:left;

`