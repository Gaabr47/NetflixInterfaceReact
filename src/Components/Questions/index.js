import Email from "../Header/CenterItems/Email";
import { QuestionDetails, Questions } from "./style";

export default function QuestionsItems(){

function Question(props){
    return(
        <QuestionDetails>
            <summary>{props.title}</summary>
            <p>{props.info}</p>
        </QuestionDetails>
    )
}

    return(
        <Questions>
        <h1>Perguntas Frequentes</h1>

        <Question
            title="O que é a Netflix?"
            info="A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.
            Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."
        />


        <Question
        title="Quanto custa a netflix?"
        info="Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato nem taxas extras."
        />

        <Question 
        
        title="Onde posso assistir?" 
        info="Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
        Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar."
        
        />
     <Question 
        
        title="Como faço para cancelar" 
        info="
        A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."
        />


        <Question 

        title="Onde eu posso assistir na Netflix? "
        info="A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser." />
        
        <Question 

title="A netflix é adequada para crianças?"
info="A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos pais.

O recurso de controle dos pais, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam." />

<Email />
        </Questions>

        
    )
}