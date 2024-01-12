import { InventoryGrid } from "./inventory-grid"

interface RightInventoryProps {
    placement: "top" | "bottom";
}

export const RightInventory = (props: RightInventoryProps) => {
    let placementClass = props.placement;
    let type = placementClass === "top" ? "medium" : "small";

    return (
        <div className={"inventory-grid-wrapper right-inventory " + placementClass} >
            <InventoryGrid slotAmount={30} type={type} />
        </div>
    )
}