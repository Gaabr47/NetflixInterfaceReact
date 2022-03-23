import { EmailForm } from "./style";

export default function Email(){
    return(
<div style={{
    margin:"0 auto",
    textAlign:"center"
}}>
<p 
style={{color:"#fff"}}>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
 
        <EmailForm>
        <input placeholder="Email" type="text"></input>
        <button>Vamos Lá</button>
    </EmailForm>

    </div>
    )
}