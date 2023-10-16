import { FerramentasDaListagem, FerramentasDeDetalhes } from "../../shared/components";
import { LayoutBaseDePaginas } from "../../shared/layouts";

export const Dashboard = () => {
    return(
        <LayoutBaseDePaginas 
        titulo="Página inicial"
        barraDeFerramentas={(
            <FerramentasDeDetalhes mostrarBotaoSalvarEFechar mostrarBotaoSalvarEFecharCarregando/>
            
        )}
        >
        Testando
        </LayoutBaseDePaginas>
    );
};