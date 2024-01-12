import { useState } from "react";
import { ContextMenuProvider } from "./contextMenuProvider";

export interface ContextMenuData {
    visible: boolean;
    position: { x: number, y: number };
}

interface ContextMenuProps {
    children: any[];
}



export const ContextMenu = (props: ContextMenuProps) => {
    const [actionsVisible, setActionsVisible] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(true);

    const [position, setPosition] = useState({ x: 550, y: 400 });

    function handleSlotRightClicked(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        let position: number[] = [event.pageX, event.pageY];

        console.log(position);
        
        setPosition({ x: position[0], y: position[1] });
        setActionsVisible(true);
        setTooltipVisible(false);
    }

    function handleMouseEnteredSlot(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setTooltipVisible(true);
    }

    function handleMouseMovedInSlot(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {

        if (actionsVisible) return;

        let position: number[] = [event.clientX, event.clientY];

        setPosition({ x: position[0], y: position[1] });
    }

    function handleMouseLeftSlot(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setTooltipVisible(false);
    }

    return (
        <ContextMenuProvider value = {{onSlotRightClicked: handleSlotRightClicked, onMouseEnter: handleMouseEnteredSlot, onMouseMove: handleMouseMovedInSlot, onMouseLeave: handleMouseLeftSlot}}>
            <ContextMenuItem showActions = {actionsVisible} tooltip = {tooltipVisible} position={position} />
            {props.children}
        </ContextMenuProvider>
    )
}

interface ContextMenuItemProps {
    showActions: boolean;
    tooltip: boolean;
    position: { x: number, y: number };
}

const ContextMenuItem = (props: ContextMenuItemProps) => {

    if (props.showActions) {
        return (
            <SlotActions position={props.position} />
        )
    }

    if (props.tooltip) {
        return (
            <SlotTooltip position={props.position} />
        )
    }

    return null;
}

function SlotInfo() {
    return (
        <div className="slot-info">
            <p className="label">Burger</p>
            <div className="extra">
                <div className="element">
                    <p className="text"><i className="fa-solid fa-weight-hanging"></i> 5.5kg</p>
                </div>
                <div className="element">
                    <p className="text"><i className="fa-solid fa-screwdriver-wrench"></i> 100</p>
                </div>
            </div>
        </div>
    )
}

function SlotAction() {
    return (
        <div className="slot-action">
            <div className="icon">
                <i className="fa-solid fa-burger"></i>
                <p className="label">Spis</p>
            </div>
        </div>
    )
}

interface SlotActionsProps {
    position: { x: number, y: number };
}

const SlotActions = (props: SlotActionsProps) => {

    function getPositionStyle() {
        //TODO: Make this work on all resolutions
        let newPosition = { x: 0, y: 0 };
        newPosition.x = props.position.x - 340;
        newPosition.y = props.position.y - 130;

        console.log(window.innerWidth)
        console.log(window.innerHeight)

        return {
            transform: `translate(${newPosition.x}px, ${newPosition.y}px)`
        }
    }

    return (
        <div className="context-actions" style={getPositionStyle()}>
            <SlotInfo />
            <div className="actions">
                <SlotAction />
                <SlotAction />
                <SlotAction />
                <SlotAction />
            </div>
        </div>
    )
}

interface SlotTooltipProps {
    position: { x: number, y: number };
}

const SlotTooltip = (props: SlotTooltipProps) => {
    
    function getPositionStyle() {
        //TODO: Make this work on all resolutions
        let newPosition = { x: 0, y: 0 };
        newPosition.x = props.position.x - 340;
        newPosition.y = props.position.y - 130;

        console.log(window.innerWidth)
        console.log(window.innerHeight)

        return {
            transform: `translate(${newPosition.x}px, ${newPosition.y}px)`
        }
    }

    return (
        <div className="context-tooltip" style={getPositionStyle()}>
            <SlotInfo />
            <div className="slot-desc">
                {/* <p className="text">A burger that will fill </p> */}
                <div className="wrapper">
                    <p className="text">Godnat, og kom godt igennem TORSDAG NAT. Jeg kom i tanke om, at der er 2 pakker . Så jeg laver lige en af dem, med 2 stk. i</p>

                </div>
            </div>
        </div>
    )
}