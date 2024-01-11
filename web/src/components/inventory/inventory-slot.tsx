interface InventorySlotProps {
    icon?: string;
}

export const InventorySlot = (props: InventorySlotProps) => {

    function backgroundIcon() {
        if (props.icon) {
            return (
                <div className="background-icon">
                    <i className={props.icon}></i>

                </div>
            )
        }

        return null;
    }

    return (
        <div className="inventory-slot">
            {backgroundIcon()}
        </div>
    )
}