function ActionQueueEntry(source, type, inventoryData, itemData)
    local entry = {
        source = source,
        type = type,

        fromInventoryIdentifier = inventoryData.fromInventoryIdentifier,
        toInventoryIdentifier = inventoryData.toInventoryIdentifier,

        fromSlot = itemData.fromSlot,
        toSlot = itemData.toSlot,

        itemName = itemData.itemName,
        itemIdentifier = itemData.itemIdentifier,
        amount = itemData.amount
    }


    return entry
end