import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListItemLinkProps{
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) => {
    
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const mach = useMatch({path: resolvedPath.pathname, end: false})
    
    const handleClick = () => {
        navigate(to);
        onClick?.();
    }
    
    return(
        <ListItemButton selected={!!mach} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
             </ListItemIcon>
            <ListItemText primary={label} />    
        </ListItemButton>

    )
}

interface IMenuLateral {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const{ isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
    
    return( 
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} display={'flex'} flexDirection={'column'} height={'100%'}>
                    <Box width='100%' height={theme.spacing(20)} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Avatar  sx={{
                            height: theme.spacing(12), width: theme.spacing(12)
                        }}
                        src="./public/img/icon.png" />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                    <List component="nav">
                        <ListItemLink
                        icon="home"
                        to="/pagina-inicial"
                        label="Página Inicial"
                        onClick={smDown ? toggleDrawerOpen : undefined}  
                        />
                        
                    </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height={'100vh'} marginLeft={smDown ? 0 : theme.spacing(28)} >
                {children}
            </Box>
        </>
    );
};