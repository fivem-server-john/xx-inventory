import { InventoryGrid } from "./inventory-grid"

export const PlayerInventory = () => {
    return (
        <div className="inventory-grid-wrapper player-inventory">
            <InventoryGrid slotAmount={30} type="main"/>
        </div>
    )
}