import { InventorySlot } from "./inventory-slot";

interface InventoryGridProps {
    slotAmount: number;

    type: string;
}

interface Grid {
    slotAmount: number;
}

export const InventoryGrid = (props: InventoryGridProps) => {
    if (props.type === "main") {
        return (
            <MainGrid slotAmount={props.slotAmount}/>
        )
    } else if (props.type === "small") {
        return (
            <SmallGrid slotAmount={props.slotAmount}/>
        )
    } else if (props.type === "side") {
        return (
            <SideGrid/>
        )
    } 

    return null;
}

function MainGrid(props: Grid) {
    return (
        <div className="wrapper">
            <div className="inventory-info">
                <p className="name">Player</p>
            </div>
            <div className="inventory-grid main">
                
                {Array.from(Array(props.slotAmount).keys()).map((slot) => {
                    return (
                        <InventorySlot />
                    )
                })}
                  
            </div>
        </div>
    )
}

function SmallGrid(props: Grid) {
    return (
        <div className="wrapper">
            <div className="inventory-info">
                <p className="name">Ground</p>
            </div>
            <div className="inventory-grid small">
                
                {/* Hot bar */}
                <InventorySlot />
                <InventorySlot />
                <InventorySlot />
                <InventorySlot />
                <InventorySlot />

                {Array.from(Array(props.slotAmount - 5).keys()).map((slot) => {
                    return (
                        <InventorySlot />
                    )
                })}
                  
            </div>
        </div>
    )
}



function SideGrid() {
    return (
        <div className="wrapper">
            <div className="inventory-info">
                <p className="name">Player</p>
            </div>
            <div className="inventory-grid side">
                
                <InventorySlot icon="fa-solid fa-hat-cowboy" />
                <InventorySlot icon="fa-solid fa-mask" />
                <InventorySlot icon="fa-solid fa-paw" />
                <InventorySlot icon="fa-solid fa-shield-halved" />
                <InventorySlot icon="fa-solid fa-mobile-screen-button" />

            </div>
        </div>
    )
}