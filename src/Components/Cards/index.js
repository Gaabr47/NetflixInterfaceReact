import QuestionsItems from '../Questions'
import {BackgroundCards, ContainerCards, Card} from './style'
export default function Cards(){

    function CardItems(props){
        return(
            <Card
            style={{
                flexDirection:props.align == 'right' ? 'row-reverse' : 'row'
                }}>
                <span>

                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
                </span>
                <img  src={props.image} />
            </Card>
        )
    }

    return(
        <>
<BackgroundCards>
    <ContainerCards>
        <CardItems
            align="left"
            title="Aproveite na TV."
            subtitle="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
            image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        />
        
    </ContainerCards>
</BackgroundCards>


<BackgroundCards>
    <ContainerCards>
 
        <CardItems
            align="right"
            title="Baixe séries para assistir offline."
            subtitle="Salve seus títulos favoritos e sempre tenha algo para assistir."
            image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        
        />
        
    </ContainerCards>

</BackgroundCards>

<BackgroundCards>
    <ContainerCards>
        <CardItems
            align="left"
            title="Assista quando quiser."
            subtitle="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
            image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        
        />
        
    </ContainerCards>
</BackgroundCards>

<BackgroundCards>
    <ContainerCards>
        <CardItems
        align="right"
            title="Crie perfis para crianças."
            subtitle="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
            image="https://occ-0-1825-3851.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUb4fcnETtielPJer_ORwZ2iUanycANl37cr81zDaXC9Fmg9c42ofxt0yxetNltG2xUMgf2Aqimz_q1Nsv-38Ng_EjIc.png?r=1b8"
        
        />
        
    </ContainerCards>
</BackgroundCards>

<BackgroundCards>
    <ContainerCards>

        <QuestionsItems />

    </ContainerCards>
</BackgroundCards>

<BackgroundCards>

</BackgroundCards>
        </>
    )
}