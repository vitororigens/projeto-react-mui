import { createContext, useCallback,  useState, useContext } from "react";

interface IDrawerOption{
    icon: string;
    path: string;
    label: string;
}

interface IDrawerContextData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOption[];
    setDrawerOptions: (newDrawerOption: IDrawerOption[]) => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

interface IDrawerProviderProps {
    children: React.ReactNode
}

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOption: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOption);

    },[])
    
   
    return (
        <DrawerContext.Provider value={{drawerOptions, isDrawerOpen, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
          {children}
        </DrawerContext.Provider>
    );
}
