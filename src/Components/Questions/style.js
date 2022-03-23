import styled from "styled-components";

export const Questions = styled.div`
h1{
    color:#fff;
    text-align:center;
}

`

export const QuestionDetails = styled.details`

background:#303030;
display:flex;
max-width:50rem;
margin:10px auto;

h2 {
    color:#fff;
}

summary {
    padding:20px;
    color:#fff;
    font-size:1.5rem;
    cursor:pointer;
    text-align:left;
}
p{
    padding:20px;
    font-size:1.2rem;
    color:#fff;
    
}

@media(max-width:768px){
    summary{
        font-size:1rem;
    }
}

`