import { getImagePath } from "../../helpers/ItemImagePath";
import { useParent } from "../context/contextMenuProvider";
import { InventoryItem } from "./InventoryItem";

interface InventorySlotProps {
    icon?: string;
    item: InventoryItem | null;
}

export const InventorySlot = (props: InventorySlotProps) => {
    const { onSlotRightClicked, onMouseEnter, onMouseMove, onMouseLeave } = useParent();

    function backgroundIcon() {
        if (props.icon) {
            return (
                <div className="background-icon">
                    <i className={props.icon}></i>

                </div>
            )
        }

        return null;
    }

    function handleContextMenu(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();

        onSlotRightClicked(event);
    }

    function handleMouseEnter(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        onMouseEnter(event, props.item);
    }

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        onMouseMove(event);
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        onMouseLeave(event);
    }


    if (props.item) {
        return (
            <div className="inventory-slot"  onContextMenu={handleContextMenu} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="amount">{props.item.amount}</div>
                <img className="" src={getImagePath(props.item.name)}></img>
                <div className="quality"></div>
            </div>
        )
    }

    return (
        <div className="inventory-slot"  onContextMenu={handleContextMenu} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {backgroundIcon()}
        </div>
    )
}