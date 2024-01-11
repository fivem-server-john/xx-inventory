import { useState } from "react";
import { useNuiEvent } from "../../hooks/useNuiEvent";
import "../../css/Inventory.css";
import { PlayerInventory } from "./player-inventory";
import { RightInventory } from "./right-inventory";
import { CharacterInventory } from "./character-inventory";

export const Inventory: React.FC = () => {
    const [inventoryVisible, setInventoryVisible] = useState(true);

    useNuiEvent<boolean>('setInventoryVisible', setInventoryVisible);
    useNuiEvent<false>('closeInventory', () => {
        setInventoryVisible(false);
    });

    return (
        <div className="inventory-wrapper">
            <CharacterInventory />
            <PlayerInventory />
            <RightInventory placement = {"top"} />
            <RightInventory placement = {"bottom"} />
        </div>
    )
}