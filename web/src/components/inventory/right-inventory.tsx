import { InventoryGrid } from "./inventory-grid"

interface RightInventoryProps {
    type: "medium" | "small";
    isLast?: boolean;
}

export const RightInventory = (props: RightInventoryProps) => {
    let size = props.type;

    let lastClass = props.isLast ? " last" : "";
    
    return (
        <div className={"inventory-grid-wrapper right-inventory " + size + lastClass} >
            <InventoryGrid slotAmount={30} type={size} />
        </div>
    )
}