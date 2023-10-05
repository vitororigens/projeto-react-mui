import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { Button } from "@mui/material"

import { useDrawerContext } from "../shared/contexts"


export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOptions} = useDrawerContext();
    
    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-incial',
                label: 'Página Inicial',
                
            },
            {
                icon: 'star',
                path: '/cidades',
                label: 'Cidades',
                
            },
        ]);

    }, []);
    


    return(
        <Routes>
            <Route path='/pagina-inicial' element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Toggle Drawer</Button>} />

            <Route path='*' element={<Navigate to='pagina-inicial'/>} />
        </Routes>
    );
};