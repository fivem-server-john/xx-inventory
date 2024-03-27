import { createContext, useContext } from "react";

const DragableContext = createContext<any>(null);

interface DragableProviderProps {
    value: any;
    children: React.ReactNode;
}

export const DragableProvider = ({value, children}: DragableProviderProps) => {
    return <DragableContext.Provider value={value}>{children}</DragableContext.Provider>
}

export const useDragable = () => {
    return useContext(DragableContext);
}