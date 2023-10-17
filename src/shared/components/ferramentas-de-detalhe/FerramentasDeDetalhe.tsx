import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme, Theme } from "@mui/material";

interface IFerramentasDeDetalhesProps {
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}



export const FerramentasDeDetalhes: React.FC<IFerramentasDeDetalhesProps> = ({
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,

}) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();

    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            component={Paper}
        >
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) &&(
                <Button
                    color="primary"
                    disableElevation
                    variant="contained"
                    onClick={aoClicarEmSalvar}
                    startIcon={<Icon>save</Icon>}
                >
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Salvar
                    </Typography>
                    
                </Button>
            )}

            {mostrarBotaoSalvarCarregando && (
                <Skeleton width={120} height={60} />
            )}

            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={aoClicarEmSalvarEFechar}
                    startIcon={<Icon>save</Icon>}
                >
                   <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden"> 
                        Salvar e voltar
                   </Typography>
                </Button>
            )}

            {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
                <Skeleton width={190} height={60} />
            )}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={aoClicarEmApagar}
                    startIcon={<Icon>delete</Icon>}
                >
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Apagar
                    </Typography>
                </Button>
            )}

            {mostrarBotaoApagarCarregando && (
                <Skeleton width={120} height={60} />
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown && !mdDown) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={aoClicarEmNovo}
                    startIcon={<Icon>add</Icon>}
                >
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        {textoBotaoNovo}
                    </Typography>
                </Button>
            )}

            {(mostrarBotaoNovoCarregando && !smDown && !mdDown) && (
                <Skeleton width={100} height={60} />
            )}

            { 
                (
                    mostrarBotaoVoltar &&
                    (mostrarBotaoSalvar || mostrarBotaoSalvarEFechar || mostrarBotaoApagar || mostrarBotaoApagar)
            ) && (
                <Divider variant="middle" orientation="vertical" />
            )}

            
            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && !smDown && !mdDown) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={aoClicarEmVoltar}
                    startIcon={<Icon>arrow_back</Icon>}
                >
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Voltar
                    </Typography>
                </Button>
            )}

            {(mostrarBotaoVoltarCarregando && !smDown && !mdDown) && (
                <Skeleton width={120} height={60} />
            )}
        </Box>
    );
}