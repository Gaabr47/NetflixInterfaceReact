import { ContainerHeader, HeaderBg } from "./style";
import NavigationHeader from "./Navigation";
import CenterItemsHeader from "./CenterItems";
export default function Header(){
    return(
      <HeaderBg>


          <ContainerHeader>

            <NavigationHeader />
            <CenterItemsHeader />

          </ContainerHeader>
     
      </HeaderBg>
    )
}