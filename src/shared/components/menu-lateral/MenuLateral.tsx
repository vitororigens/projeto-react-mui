import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { useDrawerContext } from "../../contexts";

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
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />    
                        </ListItemButton>
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