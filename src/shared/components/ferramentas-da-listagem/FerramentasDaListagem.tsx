import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

interface IFerramentasDaListagem {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}
export const FerramentasDaListagem: React.FC<IFerramentasDaListagem> =({
    textoDaBusca ='',
    mostrarInputBusca = false,
    aoMudarTextoDeBusca: aoMudarTextoDaBusca,
    aoClicarEmNovo,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,

}) => {
    const theme = useTheme();
    return(
        <Box 
        gap={1}
        marginX={1}
        padding={1}
        paddingX={2}
        display="flex"
        alignItems="center"
        height={theme.spacing(5)} 
        component={Paper}>
            {mostrarInputBusca &&(
                <TextField
                size="small"
                value={textoDaBusca}
                onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
                placeholder="Pesquisar..."
            />
            )}
        <Box flex={1} display={"flex"} justifyContent={"end"}>
            {mostrarBotaoNovo&&(
                <Button 
                color="primary"
                disableElevation
                onClick={aoClicarEmNovo}
                variant="contained"
                endIcon={<Icon>add</Icon>}
                >{textoBotaoNovo}</Button>
            )}
            </Box>
        </Box>
    );
};