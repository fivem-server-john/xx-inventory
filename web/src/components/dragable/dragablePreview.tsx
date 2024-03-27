import { useState } from "react";
import { DragableProvider } from "./dragableProvider";

export interface DragableData {
    children: React.ReactNode;
}

export const Dragable = (props: DragableData) => {
    
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleSlotLeftClicked(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        
    }

    function handleMouseMoved(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {

    }

    return (
        <DragableProvider value = {{onSlotLeftClickedDragable: handleSlotLeftClicked, onMouseMoveDragable: handleMouseMoved}}>
            {props.children}
        </DragableProvider>
    )
}