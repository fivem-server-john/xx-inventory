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
    } else if (props.type === "medium") {
        return (
            <MediumGrid slotAmount={props.slotAmount}/>
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

interface GridInfoProps {
    label: string;
    weight: number;
    maxWeight: number;
}

function GridInfo(props: GridInfoProps) {

    function getWeightProcentage() {
        return (props.weight / props.maxWeight) * 100 + "%";
    }

    return (
        <div className="inventory-info">
            <p className="name">{props.label}</p>
            <p className="weight">{props.weight}kg / {props.maxWeight}kg</p>
            <div className="weight-bar">
                <div className="cover" style={{width: getWeightProcentage()}}>
                    <div className="color"></div>
                </div>
                
            </div>
        </div>
    )
}

function MainGrid(props: Grid) {
    return (
        <div className="wrapper">
            <GridInfo label="Spiller" weight={150.0} maxWeight={150.00}/>
            <div className="inventory-grid main">
                
                {/* Hot bar */}
                <InventorySlot icon="fa-solid fa-1"/>
                <InventorySlot icon="fa-solid fa-2"/>
                <InventorySlot icon="fa-solid fa-3"/>
                <InventorySlot icon="fa-solid fa-4"/>
                <InventorySlot icon="fa-solid fa-5"/>

                {Array.from(Array(props.slotAmount - 5).keys()).map((slot) => {
                    return (
                        <InventorySlot />
                    )
                })}
                  
            </div>
        </div>
    )
}

function MediumGrid(props: Grid) {
    return (
        <div className="wrapper">
            <GridInfo label="Handskerum" weight={37.5} maxWeight={150.00}/>
            <div className="inventory-grid medium">
            
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
            <GridInfo label="Jorden" weight={37.5} maxWeight={1000.00}/>
            <div className="inventory-grid small">
            
                {Array.from(Array(props.slotAmount).keys()).map((slot) => {
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
            <div className="inventory-grid side">
                
                <InventorySlot icon="fa-solid fa-hat-cowboy" />
                <InventorySlot icon="fa-solid fa-mask" />
                <InventorySlot icon="fa-solid fa-paw" />
                <InventorySlot icon="fa-solid fa-shield-halved" />
                <InventorySlot icon="fa-solid fa-mobile-screen-button" />
                <InventorySlot icon="fa-solid fa-walkie-talkie" />

            </div>
        </div>
    )
}