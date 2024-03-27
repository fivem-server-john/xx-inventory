import { useState } from "react";
import { useNuiEvent } from "../../hooks/useNuiEvent";
import "../../css/Inventory.css";
import { PlayerInventory } from "./player-inventory";
import { RightInventory } from "./right-inventory";
import { CharacterInventory } from "./character-inventory";
import { ContextMenu } from "../context/contextMenu";
import { Dragable } from "../dragable/dragablePreview";


export const Inventory: React.FC = () => {
    const [inventoryVisible, setInventoryVisible] = useState(true);

    useNuiEvent<boolean>('setInventoryVisible', setInventoryVisible);
    useNuiEvent<false>('closeInventory', () => {
        setInventoryVisible(false);
    });

    if (!inventoryVisible) return null;

    return (
        <div className="inventory-wrapper">
            <ContextMenu>
                <Dragable>

                    <CharacterInventory />
                    <PlayerInventory />

                    <div className="right-inventories">

                        <RightInventory type = {"medium"} />
                        
                        <RightInventory type = {"small"} isLast = {true} />  
                    </div>

                </Dragable>
            </ContextMenu>
        </div>
    )
}
