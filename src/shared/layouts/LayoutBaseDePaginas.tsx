import { Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../contexts";
import { ReactNode } from "react";

interface ILayoutBaseDePaginas{
    titulo: string;
    barraDeFerramentas: ReactNode;
    children: string;
}
export const LayoutBaseDePaginas: React.FC<ILayoutBaseDePaginas> = ({ children , titulo, barraDeFerramentas }) => {

   const theme = useTheme();
   
   const smDown = useMediaQuery(theme.breakpoints.down('sm'));
   const mdDown = useMediaQuery(theme.breakpoints.down('md'));
   const {toggleDrawerOpen} = useDrawerContext();
   
    return(
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
           <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1}>
                
           {smDown &&(
                 <IconButton onClick={toggleDrawerOpen}>
                 <Icon>menu</Icon>
                </IconButton>
           )}
                
                <Typography
                 overflow="hidden"
                 whiteSpace="nowrap"
                 textOverflow="ellipsis"
                 variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                >
                    {titulo}
                </Typography>
                
           </Box>
           <Box>
                {barraDeFerramentas}
           </Box>


           <Box>
                {children}
           </Box>
        </Box>
    );
};