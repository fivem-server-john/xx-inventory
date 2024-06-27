import { useState } from "react";
import { useNuiEvent } from "../../hooks/useNuiEvent";
import "./Inventory.scss";
import { PlayerInventory } from "./player-inventory";
import { RightInventory } from "./right-inventory";
import { CharacterInventory } from "./character-inventory";
import { ContextMenu } from "../context/contextMenu";
import { Dragable } from "../dragable/dragablePreview";
import { GetInventorySize } from "../../helpers/Viewport";


export const Inventory: React.FC = () => {
    const [inventoryVisible, setInventoryVisible] = useState(true);

    useNuiEvent<boolean>('setInventoryVisible', setInventoryVisible);
    useNuiEvent<false>('closeInventory', () => {
        setInventoryVisible(false);
    });
    

    if (!inventoryVisible) return null;

    function getInventoryStyle() {
        let viewportData: any = GetInventorySize()

        let width = viewportData[0].toString() + "px";
        let height = viewportData[1].toString() + "px";
        return {
            "width": width,
            "height": height,
        }
    }

    return (
        <div className="inventory-wrapper" style={getInventoryStyle()}>
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
