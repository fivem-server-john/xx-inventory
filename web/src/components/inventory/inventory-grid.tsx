import { testItem } from "./InventoryItem";
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
                <InventorySlot icon="fa-solid fa-1" item = {testItem}/>
                <InventorySlot icon="fa-solid fa-2" item = {null}/>
                <InventorySlot icon="fa-solid fa-3" item = {null}/>
                <InventorySlot icon="fa-solid fa-4" item = {null}/>
                <InventorySlot icon="fa-solid fa-5" item = {null}/>

                {Array.from(Array(props.slotAmount - 5).keys()).map((slot) => {
                    return (
                        <InventorySlot item = {null}/>
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
                        <InventorySlot item = {null}/>
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
                        <InventorySlot item = {null}/>
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
                
                <InventorySlot icon="fa-solid fa-hat-cowboy" item = {null}/>
                <InventorySlot icon="fa-solid fa-mask" item = {null}/>
                <InventorySlot icon="fa-solid fa-paw" item = {null}/>
                <InventorySlot icon="fa-solid fa-shield-halved" item = {null}/>
                <InventorySlot icon="fa-solid fa-mobile-screen-button" item = {null}/>
                <InventorySlot icon="fa-solid fa-walkie-talkie" item = {null}/>

            </div>
        </div>
    )
}