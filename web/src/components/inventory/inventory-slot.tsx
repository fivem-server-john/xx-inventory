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
        onMouseEnter(event);
    }

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        onMouseMove(event);
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        onMouseLeave(event);
    }

    return (
        <div className="inventory-slot"  onContextMenu={handleContextMenu} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {backgroundIcon()}
        </div>
    )
}