import { useState } from "react";
import { ContextMenuProvider } from "./contextMenuProvider";
import "./Context.scss";
import { GetOffset } from "./contextOffset";
import { InventoryItem } from "../inventory/InventoryItem";

export interface ContextMenuData {
    visible: boolean;
    position: { x: number, y: number };
}

interface ContextMenuProps {
    children: React.ReactNode;
}

export const ContextMenu = (props: ContextMenuProps) => {
    const [actionsVisible, setActionsVisible] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(true);
    const [currentItem, setCurrentItem] = useState<InventoryItem | null>(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleSlotRightClicked(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
      
        if (actionsVisible) {
            setActionsVisible(false);
            setTooltipVisible(true);
            return;
        }

        let position: number[] = [event.clientX, event.clientY];
        
        setPosition({ x: position[0], y: position[1]});
        setActionsVisible(true);
        setTooltipVisible(false);
    }

    function handleMouseEnteredSlot(event: React.MouseEvent<HTMLDivElement, MouseEvent>, item: InventoryItem | null) {
        setTooltipVisible(true);
        setCurrentItem(item);
    }

    function handleMouseMoved(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {

        if (actionsVisible) return;

        let position: number[] = [event.clientX, event.clientY];

        setPosition({ x: position[0], y: position[1] });
    }

    function handleMouseLeftSlot(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setTooltipVisible(false);
    }

    return (
        <ContextMenuProvider value = {{onSlotRightClicked: handleSlotRightClicked, onMouseEnter: handleMouseEnteredSlot, onMouseMove: handleMouseMoved, onMouseLeave: handleMouseLeftSlot}}>
            <ContextMenuItem showActions = {actionsVisible} tooltip = {tooltipVisible} position={position} currentItem={currentItem}/>
            {props.children}
        </ContextMenuProvider>
    )
}

interface ContextMenuItemProps {
    showActions: boolean;
    tooltip: boolean;
    position: { x: number, y: number };
    currentItem: InventoryItem | null;
}

const ContextMenuItem = (props: ContextMenuItemProps) => {

    if (props.currentItem == null) return null;

    if (props.showActions) {
        return (
            <SlotActions position={props.position} currentItem = {props.currentItem}/>
        )
    }

    if (props.tooltip) {
        return (
            <SlotTooltip position={props.position} currentItem={props.currentItem} />
        )
    }

    return null;
}

interface SlotInfoProps {
    item: InventoryItem | null;
}

function SlotInfo(props: SlotInfoProps) {

    if (!props.item) return null;

    return (
        <div className="slot-info">
            <p className="label">{props.item.label}</p>
            <div className="extra">
                <div className="element">
                    <p className="text"><i className="fa-solid fa-weight-hanging"></i> 5.5kg</p> {/* Weight */}
                </div>
                <div className="element">
                    <p className="text"><i className="fa-solid fa-screwdriver-wrench"></i> {props.item.quality}</p> {/* Quality */}
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
    currentItem: InventoryItem | null;
}

const SlotActions = (props: SlotActionsProps) => {

    function getPositionStyle() {
        //TODO: Make this work on all resolutions
        let newPosition = { x: props.position.x, y: props.position.y };

        let offset = GetOffset(window.innerWidth, window.innerHeight);
        
        newPosition.x += offset.left;
        newPosition.y += offset.top;
        

        return {
            left: `${newPosition.x}px`,
            top: `${newPosition.y}px`
        }
    }

    return (
        <div className="context-actions" style={getPositionStyle()}>
            <SlotInfo item = {props.currentItem} />
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
    currentItem: InventoryItem;
}

const SlotTooltip = (props: SlotTooltipProps) => {
    
    function getPositionStyle() {
        //TODO: Make this work on all resolutions
        let newPosition = { x: props.position.x, y: props.position.y };

        let offset = GetOffset(window.innerWidth, window.innerHeight);
        
        newPosition.x += offset.left;
        newPosition.y += offset.top;
        

        return {
            left: `${newPosition.x}px`,
            top: `${newPosition.y}px`
        }
    }

    return (
        <div className="context-tooltip" style={getPositionStyle()}>
            <SlotInfo item={props.currentItem}/>
            <div className="slot-desc">
                {/* <p className="text">A burger that will fill </p> */}
                <div className="wrapper">
                    <p className="text">{props.currentItem.desc}</p>

                </div>
            </div>
        </div>
    )
}