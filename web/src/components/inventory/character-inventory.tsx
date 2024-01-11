import { InventoryGrid } from "./inventory-grid"

export const CharacterInventory = () => {
    return (
        <div className="inventory-grid-wrapper character-inventory">
            <InventoryGrid slotAmount={5} type="side"/>
        </div>
    )
}